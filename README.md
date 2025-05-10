# Chatty - Real-Time Chat App

Chatty is a real-time chat application inspired by WhatsApp, allowing users to send and receive text and images. Built with modern web technologies, it offers a seamless experience for messaging with real-time updates. The frontend uses React, Tailwind CSS, and DaisyUI, while the backend is powered by Express, MongoDB, and Cloudinary for image storage. User authentication and authorization are handled with JSON Web Tokens (JWT) and bcrypt for secure password hashing.

## The Demo
[Chatty](https://chatty-zjhl.onrender.com)

## 🚀 Features
- Real-time messaging with instant updates
- Send and receive text and images
- User authentication and authorization using JWT
- Password security with bcrypt hashing
- Image storage via Cloudinary
- State management with Zustand
- Styled with Tailwind CSS and DaisyUI

## 📌 Requirements
- Node.js (v16.x or higher)
- npm or yarn
- MongoDB (local or cloud)
- Cloudinary account for image storage

## 🛠 Setup & Installation

### 1. Clone the repository:
```bash
git clone https://github.com/yourusername/chatty
cd chatty
```

2. Install dependencies:
For the backend:
```bash
cd backend
npm install
```

For the frontend:
```
cd frontend
npm install
```

3. Set up environment variables:
Backend Configuration:
Create a .env file in the backend folder with the following environment variables:
```
MONGODB_URI="your_mongo_connection_string"
JWT_SECRET="your_jwt_secret_key"
CLOUDINARY_CLOUD_NAME="your_cloudinary_cloud_name"
CLOUDINARY_API_KEY="your_cloudinary_api_key"
CLOUDINARY_API_SECRET="your_cloudinary_api_secret"
```

4. Start the backend server:
```
cd backend
npm start
```

5. Start the frontend development server:
```
cd frontend
npm start
```
The application will be available at http://localhost:3000.

🔑 Authentication
User authentication is managed through JWT tokens.

During login, the backend returns a JWT token that should is stored on the client-side.

The JWT token is sent with each request that requires authorization via the Authorization header:
```http
Authorization: Bearer <your_jwt_token>
```

📜 License
This project is licensed under the MIT License.
