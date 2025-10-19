import request from "supertest";
import app from "../src/app.js";

describe("GET /me", () => {
  it("returns the expected JSON shape", async () => {
    const res = await request(app).get("/me");
    expect(res.status).toBe(200);
    expect(res.headers["content-type"]).toMatch(/application\/json/);
    expect(res.body.status).toBe("success");
    expect(res.body.user).toEqual(
      expect.objectContaining({ email: expect.any(String), name: expect.any(String), stack: expect.any(String) })
    );
    expect(typeof res.body.fact).toBe("string");

    // timestamp ISO & reasonably close to now
    const ts = new Date(res.body.timestamp).getTime();
    expect(Number.isNaN(ts)).toBe(false);
    expect(Math.abs(Date.now() - ts)).toBeLessThan(10_000);
  });
});
