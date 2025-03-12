import dotenv from "dotenv";

dotenv.config()

export const { PORT, MONGODB_URI, JWT_SECRET, CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, NODE_ENV } = process.env;