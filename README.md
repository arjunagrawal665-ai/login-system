# Authentication System

A complete full-stack authentication system built with Node.js, Express, MongoDB, and React. This project demonstrates user registration, login, JWT-based authentication, and protected routes.

## 🚀 Features

### Backend
- **User Registration & Login** with email validation
- **Password Hashing** using bcryptjs
- **JWT Token Authentication** with 1-hour expiration
- **Protected Routes** with middleware authentication
- **MongoDB Integration** with Mongoose ODM
- **CORS Support** for frontend-backend communication
- **Input Validation** and error handling

### Frontend
- **React Router** for client-side routing
- **Protected Routes** that require authentication
- **JWT Token Management** with localStorage
- **Authentication Context** for global state management
- **Responsive Design** with clean UI
- **Real-time Authentication Status**

## 📁 Project Structure

```
├── backend/
│   ├── server.js              # Main server file
│   ├── package.json           # Backend dependencies
│   ├── .env.local            # Environment variables (create this)
│   ├── config/
│   │   └── db.js             # Database connection
│   ├── models/
│   │   └── User.js           # User model with Mongoose
│   ├── routes/
│   │   └── authRoutes.js     # Authentication routes
│   └── middleware/
│       └── authMiddleware.js # JWT authentication middleware
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js     # Navigation component
│   │   │   └── ProtectedRoute.js # Route protection
│   │   ├── context/
│   │   │   └── AuthContext.js # Authentication context
│   │   ├── pages/
│   │   │   ├── Login.js      # Login page
│   │   │   ├── Signup.js     # Registration page
│   │   │   ├── Home.js       # Public home page
│   │   │   ├── Dashboard.js  # Protected dashboard
│   │   │   └── Profile.js    # Protected profile page
│   │   ├── App.js            # Main App component
│   │   └── index.js          # React entry point
│   ├── public/
│   │   └── index.html        # HTML template
│   └── package.json          # Frontend dependencies
└── README.md                 # This file
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB instance
- Git

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd auth-system
```

### 2. Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
# Create .env.local file in the backend directory
touch .env.local
```

4. Add your environment variables to `.env.local`:
```env
MONGO_URI=mongodb+srv://your-username:your-password@cluster0.mongodb.net/auth-system?retryWrites=true&w=majority
JWT_SECRET=your-super-secret-jwt-key-here-make-it-long-and-random
PORT=5000
```

5. Start the backend server:
```bash
npm start
# or for development with auto-reload:
npm run dev
```

The backend will be running on `http://localhost:5000`

### 3. Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the frontend development server:
```bash
npm start
```

The frontend will be running on `http://localhost:3000`

## 🔧 API Endpoints

### Authentication Routes

#### POST `/api/auth/signup`
Register a new user.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "User created successfully",
  "token": "jwt-token-here",
  "user": {
    "id": "user-id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

#### POST `/api/auth/login`
Login an existing user.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "token": "jwt-token-here",
  "user": {
    "id": "user-id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

#### GET `/api/auth/me`
Get current user information (requires authentication).

**Headers:**
```
Authorization: Bearer <jwt-token>
```

**Response:**
```json
{
  "user": {
    "id": "user-id",
    "name": "John Doe",
    "email": "john@example.com",
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-01-01T00:00:00.000Z"
  }
}
```

### Protected Routes

#### GET `/api/protected`
Example protected route (requires authentication).

**Headers:**
```
Authorization: Bearer <jwt-token>
```

**Response:**
```json
{
  "message": "Welcome to the protected route!",
  "user": {
    "id": "user-id",
    "name": "John Doe",
    "email": "john@example.com"
  },
  "timestamp": "2023-01-01T00:00:00.000Z"
}
```

## 🎯 Frontend Pages

### Public Pages
- **Home (`/`)** - Welcome page accessible to everyone
- **Login (`/login`)** - User login form
- **Signup (`/signup`)** - User registration form

### Protected Pages
- **Dashboard (`/dashboard`)** - Main user dashboard (requires login)
- **Profile (`/profile`)** - User profile page (requires login)

## 🔐 Security Features

- **Password Hashing** - Passwords are hashed using bcryptjs with salt rounds
- **JWT Tokens** - Secure token-based authentication with expiration
- **Route Protection** - Frontend and backend route protection
- **Input Validation** - Server-side validation for all inputs
- **CORS Configuration** - Proper cross-origin resource sharing setup
- **Environment Variables** - Sensitive data stored in environment variables

## 🚀 Deployment

### Backend Deployment
1. Set up environment variables on your hosting platform
2. Ensure MongoDB Atlas allows connections from your server IP
3. Deploy to platforms like Heroku, Vercel, or AWS

### Frontend Deployment
1. Build the production version:
```bash
cd frontend
npm run build
```
2. Deploy the `build` folder to platforms like Netlify, Vercel, or GitHub Pages

## 🧪 Testing the Application

1. **Start both servers** (backend on port 5000, frontend on port 3000)
2. **Visit** `http://localhost:3000`
3. **Try signing up** with a new account
4. **Login** with your credentials
5. **Access protected pages** (Dashboard and Profile)
6. **Test logout** functionality

## 📝 Environment Variables Required

Create a `.env.local` file in the backend directory with:

```env
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-jwt-secret-key
PORT=5000
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Verify your MongoDB Atlas connection string
   - Ensure your IP is whitelisted in MongoDB Atlas
   - Check if the database name in the connection string is correct

2. **CORS Errors**
   - Ensure the backend is running on port 5000
   - Check that the frontend proxy is configured correctly

3. **JWT Token Errors**
   - Verify your JWT_SECRET is set correctly
   - Check if the token has expired (1-hour expiration)

4. **Port Already in Use**
   - Change the PORT in your `.env.local` file
   - Kill any processes using the port: `lsof -ti:5000 | xargs kill -9`

## 📞 Support

If you encounter any issues or have questions, please open an issue in the repository.


