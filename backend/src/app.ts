import express from 'express';
import authRoute from './routes/authRoute';
import userRoute from './routes/userRoute';
import messageRoute from './routes/messageRoute';
import chatRoute from './routes/chatRoute';
import { clerkMiddleware } from '@clerk/express'
import { errorHandler } from './middleware/errorHandler';

const app = express();

app.use(express.json());

app.use(clerkMiddleware())

app.get("/helgth", (req, res) => {
    res.json({ status: "ok", message: "server is running" })
})

app.use("/api/auth", authRoute)
app.use("/api/chats", chatRoute)  
app.use("/api/messages", messageRoute)
app.use("/api/users", userRoute)

//error handlers must come after all the routes and other middlewares so they can catch errors passed with next(err)
//  or thrown inside async handlers.

app.use(errorHandler);
export default app;
