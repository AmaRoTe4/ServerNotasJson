import express from "express";
import cors from "cors";
import { PORT } from "./src/config/config.js"
import router from "./src/routes/routes.js";

const app = express();

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/Api' , router);

app.get('/', (req, res)=>{
    res.send("running")
})

app.listen(process.env.PORT)
