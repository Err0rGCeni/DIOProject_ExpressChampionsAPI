import express, { json } from "express";
import cors from "cors"
import router from "./routes";

function createApp() {
    const app = express()

    app.use(json())
    app.use("/api", router)
/*
    const corsOptions = {
        origin: 'http:/test.sys.com',
        methods: ['GET']
    }
*/
    app.use(cors())

    return app;
}

export default createApp;
