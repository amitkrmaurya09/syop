import express from 'express'
import {user} from './userAuth/auth.js'
import cors from 'cors'
import { post } from './components/posts/post.js';
import {userMiddleware} from "./middleware/userMiddleware.js"
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use("/api/v1/user",user)
app.use("/api/v1/user/post",post)





app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
