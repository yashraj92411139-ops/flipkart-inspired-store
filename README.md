# Shoply

A Flipkart-inspired e-commerce website built with React, Vite, Express, and MongoDB-ready backend.

## Features
- Blue ecommerce header with search, login, cart and wishlist actions
- Category menu and promotional banner carousel
- Product cards with pricing, ratings, offers and badges
- Product search, filters and sorting
- Product detail, cart, wishlist and checkout flows
- Delivery address management and order tracking
- Test-mode payment flow and admin dashboard
- Express API with validation and mock MongoDB-ready logic

## Tech stack
- Frontend: React + Vite + CSS
- Backend: Node.js + Express
- Database: MongoDB + Mongoose (optional integration via env)

## Prerequisites
- Node.js 18+
- npm 9+
- MongoDB connection URI (optional for local mock mode)

## Installation
```bash
npm install
```

## Environment setup
Copy `.env.example` to `.env` and update settings:

```bash
cp .env.example .env
```

## Start development servers
```bash
npm run dev
```

This starts:
- Frontend: http://localhost:5173
- Backend API: http://localhost:4000

## Production build
```bash
npm run build
```

## Start production server
```bash
npm run start
```

## Default admin access
- Email: admin@shoply.com
- Password: admin123

## Notes
The app uses a mock data layer by default so it can run without MongoDB. If you provide `MONGO_URI`, the Express server will attempt to connect to MongoDB and keep the API ready for real persistence.
