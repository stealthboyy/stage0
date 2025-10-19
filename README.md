# 🐱 Profile API – HNGx Stage Zero Backend Task

This project is a simple RESTful API built with **Node.js** and **Express**.  
It returns my **profile information** along with a **random cat fact** fetched dynamically from the [Cat Facts API](https://catfact.ninja/fact).

---

## 🚀 Features
- `GET /me` endpoint that returns:
  - My personal info (name, email, tech stack)
  - A random cat fact from the Cat Facts API
  - The current UTC timestamp
- Integration with a third-party API
- Graceful error handling & timeouts
- Proper JSON response format
- Environment variable support (`dotenv`)
- CORS enabled
- Modular, easy-to-read code structure

---

## 🧩 Response Format

Example successful `GET /me` response:

```json
{
  "status": "success",
  "user": {
    "email": "abcdef@gmail.com",
    "name": "john doe",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-19T21:37:01.289Z",
  "fact": "Cats sleep for 70% of their lives."
}
