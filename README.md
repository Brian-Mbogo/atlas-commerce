# Atlas Commerce

Atlas Commerce is a modern full-stack ecommerce starter inspired by clean lifestyle storefronts like Allbirds and Chubbies. The project is designed around fast browsing, polished product presentation, and a smooth checkout experience.

Tagline: Buy better. Faster checkout. Clean experience.

## Overview

This repository currently includes:

- A React + Vite frontend with Tailwind CSS styling
- React Router based page structure
- Zustand stores for session, cart, and recently viewed products
- Framer Motion powered UI animation
- A Node.js + Express backend scaffold
- MongoDB + Mongoose ready models and routes
- JWT authentication foundation

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- React Router
- Zustand
- Framer Motion

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs

### Deployment Targets

- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

## Live Demo

- Frontend: https://atlas-commerce-pz9g.vercel.app

## Current Features

### Frontend

- Landing page with hero, categories, best sellers, testimonials, newsletter, and footer
- Login, register, and forgot password pages
- Shop page with search, category filtering, sorting, and pagination
- Product details page with reviews and related products
- Cart page with quantity updates and totals
- Checkout page with Stripe, PayPal, and M-Pesa placeholders
- User dashboard
- Admin dashboard

### Backend

- Express app structure with centralized routing
- Health check endpoint
- Auth endpoints for register, login, forgot password, and current user
- Product endpoints for listing and fetching products by slug
- Mongoose models for `User`, `Product`, `Cart`, `Order`, `Review`, and `Category`

## Project Structure

```text
atlas-commerce/
├── client/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── store/
│   │   └── assets/
│   └── public/
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── utils/
└── README.md
```

## Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/Brian-Mbogo/atlas-commerce.git
cd atlas-commerce
```

### 2. Install frontend dependencies

```powershell
cd client
npm.cmd install
```

### 3. Start the frontend

```powershell
npm.cmd run dev
```

Frontend runs at:

```text
http://localhost:5173
```

### 4. Install backend dependencies

```powershell
cd ..\server
npm.cmd install
```

### 5. Configure environment variables

Copy `server/.env.example` to `server/.env` and fill in your values:

```env
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_secret
JWT_EXPIRES_IN=7d
```

### 6. Start the backend

```powershell
npm.cmd run dev
```

Backend health check:

```text
http://localhost:5000/api/health
```

## API Endpoints

### Health

- `GET /api/health`

### Auth

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/forgot-password`
- `GET /api/auth/me`

### Products

- `GET /api/products`
- `GET /api/products/:slug`

## Design Direction

- Background: `#FAFAF7`
- Primary: `#111827`
- Accent: `#D97706`
- Secondary: `#6B7280`
- Heading font: Poppins
- Body font: Inter

The current UI favors:

- Large product imagery
- Rounded surfaces
- Minimal navigation
- Spacious layout
- Soft motion and clean hierarchy

## Next Steps

Recommended next implementation slices:

- Connect frontend auth forms to the Express API
- Replace mock catalog data with MongoDB-backed products
- Add Cloudinary image upload for admin product CRUD
- Integrate Stripe, PayPal, and M-Pesa payment flows
- Add wishlist, coupons, order tracking, and email receipts
- Add PWA support and AI-powered search

## Verification

The current scaffold has been verified with:

```powershell
cd client
npm.cmd run lint
npm.cmd run build
```

## Author

Brian Mbogo
