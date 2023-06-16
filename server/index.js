import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from './routes/posts.js'
import dotenv from 'dotenv'

const app = express();
dotenv.config();


app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());
app.use('/posts', postRoutes)

// const CONNECTION_URL = 'mongodb+srv://<username>:<password>@memoryproject.8giccfm.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5001;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
