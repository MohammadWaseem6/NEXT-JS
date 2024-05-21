import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/test');

        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("mongo connected successfully");
        });
    } catch (error) {
        console.log("MongoDB connection error:", error);
        process.exit(1);
    }
}
