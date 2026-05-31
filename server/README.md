TaraConnect - Backend (minimal MERN scaffold)

Quick start

1. Copy `.env.example` to `.env` and fill values.
2. Install dependencies:

```
cd server
npm install
```

3. Run in development:

```
npm run dev
```

API endpoints:
- `POST /api/auth/signup` - create user
- `POST /api/auth/login` - login
- `GET /api/brands` - list brands
- `POST /api/brands` - create brand (protected)
