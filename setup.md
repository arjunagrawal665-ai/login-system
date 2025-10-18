# Quick Setup Guide

## 🚀 Getting Started

### 1. Environment Setup

Create a `.env.local` file in the `backend` directory with your MongoDB and JWT credentials:

```env
MONGO_URI=mongodb+srv://your-username:your-password@cluster0.mongodb.net/auth-system?retryWrites=true&w=majority
JWT_SECRET=your-super-secret-jwt-key-here-make-it-long-and-random
PORT=5000
```

### 2. Install Dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

### 3. Start the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm start
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

### 4. Access the Application

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 🎯 What You Can Do

1. **Visit Home Page** - Public welcome page
2. **Sign Up** - Create a new account
3. **Login** - Access with your credentials
4. **Dashboard** - Protected page with user data
5. **Profile** - View your account information
6. **Logout** - Secure logout functionality

## 📝 Important Notes

- Make sure MongoDB Atlas allows connections from 0.0.0.0/0 (or your IP)
- The JWT secret should be a long, random string
- Both servers need to run simultaneously for full functionality
- The frontend is configured to proxy API requests to the backend

## 🔧 Troubleshooting

- **Port 5000 in use?** Change PORT in `.env.local`
- **CORS errors?** Ensure backend is running on port 5000
- **MongoDB errors?** Check your connection string and IP whitelist


