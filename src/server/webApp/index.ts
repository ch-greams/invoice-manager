import express from "express";
import path from "path";


export default class WebApp {

    private app: express.Application;
    
    constructor() {

        this.app = express();

        this.config();
        this.routes();
    }

    private config(): void {
        this.app.use(express.static("view"));
        this.app.use(express.static("out"));
    }

    private routes(): void {
        const callback = (_req: express.Request, res: express.Response) => {
            const fullPath = path.join(__dirname, "view", "index.html");
            res.sendFile(fullPath);
        };
        
        this.app.get("/", callback);
        this.app.get("/help", (_req, res) => res.send("We are here to help U"));
    }

    public run(port: number): void {
        this.app.listen(port);

    }
}

