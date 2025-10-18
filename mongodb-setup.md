# MongoDB Atlas Setup Guide

## 🚀 Quick Setup (5 minutes)

### Step 1: Create MongoDB Atlas Account
1. Go to: https://www.mongodb.com/atlas
2. Click "Try Free" 
3. Sign up with Google/GitHub or email

### Step 2: Create a Free Cluster
1. Choose "Shared" (Free tier)
2. Select a region close to you
3. Name your cluster: `auth-cluster`
4. Click "Create Cluster"

### Step 3: Create Database User
1. Go to "Database Access" in the left menu
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Username: `authuser`
5. Password: `authpass123`
6. Click "Add User"

### Step 4: Whitelist Your IP
1. Go to "Network Access" in the left menu
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (0.0.0.0/0)
4. Click "Confirm"

### Step 5: Get Connection String
1. Go to "Clusters" in the left menu
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Copy the connection string
5. Replace `<password>` with `authpass123`
6. Replace `<dbname>` with `auth-system`

### Step 6: Update Your .env.local
Replace the MONGO_URI in `backend/.env.local` with your connection string.

## 🔧 Alternative: Use Your Own Connection String

If you already have a MongoDB Atlas account:
1. Get your connection string from Atlas
2. Update `backend/.env.local` with your connection string
3. Make sure your IP is whitelisted
4. Make sure your database user has read/write permissions

## ✅ Test Your Connection
After setup, run:
```bash
npm start
```

You should see:
```
🚀 Server running on port 5000
✅ MongoDB connected successfully
```

## 🆘 Troubleshooting
- **Connection timeout**: Check IP whitelist
- **Authentication failed**: Check username/password
- **Database not found**: The database will be created automatically
