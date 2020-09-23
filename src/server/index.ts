import express from "express";
import path from "path";

const app = express();
app.use(express.static("view"));

const callback = (_req: express.Request, res: express.Response) => {
    const fullPath = path.join(__dirname, "view", "index.html");
    res.sendFile(fullPath);
};

app.get("/", callback);
app.get("/help", (_req, res) => res.send("We are here to help U"));
app.listen(3000);
