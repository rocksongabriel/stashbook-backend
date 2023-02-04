import express, { Express, Response, Request } from "express";

const app: Express = express();
const port: number = Number(process.env.PORT) || 3000;
const host: string = "0.0.0.0";

app.get("/", (req: Request, res: Response) => {
  res.send({ data: "Welcome to the stashbook" });
});

app.listen(port, host, () => {
  console.log(`Stashbook application running on host: ${host}:${port}`);
});
