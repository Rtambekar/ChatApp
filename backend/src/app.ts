import express from 'express';
import authRoute from './routes/authRoute';
import userRoute from './routes/userRoute';
import messageRoute from './routes/messageRoute';
import chatRoute from './routes/chatRoute';

const app = express();

app.use(express.json());

app.get("/helgth", (req, res) => {
    res.json({ status: "ok", message: "server is running" })
})

app.use("/api/auth", authRoute)
app.use("/api/chats", chatRoute)  
app.use("/api/messages", messageRoute)
app.use("/api/users", userRoute)

export default app;
