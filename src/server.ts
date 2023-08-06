import "dotenv/config";
import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";

const server:Express = express();
const port = process.env.PORT ?? 6000;

/* MIDDLEWARE START */

// Logger
server.use(morgan('tiny'));

// Cors
server.use(cors({
    origin:"http://localhost:4444",
    credentials : true,
}))

// Express JSON
server.use(express.json());



/* MIDDLEWARE END */

server.get('/',(req:Request, res:Response):void =>{
    res.send("HELLO WORLD from QUIZZER SERVER");
});

server.listen(port,():void =>{
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
})
