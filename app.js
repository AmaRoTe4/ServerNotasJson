import express from "express";
import cors from "cors";
import router from "./src/routes/routes.js";
import * as dotenv from 'dotenv'

dotenv.config()

const app = express();

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/Api' , router);

app.get('/', (req, res)=>{
    res.send("running")
})

app.listen(process.env.PORT ,() => {
    console.log(`listening on port ${process.env.PORT}`)
})
