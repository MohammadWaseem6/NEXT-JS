import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/test');

        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("mongo connected successfully");
        });

        connection.on("error", (err) => {
            console.log("mongo db failed to connect: " + err);
            process.exit(1);
        });
    } catch (error) {
        console.log("Something went wrong");
        console.log(error);
    }
}
