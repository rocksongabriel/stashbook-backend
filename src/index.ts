import express, { Express, Response, Request } from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import StandupRoutes from "./routes/standup.route";

const app: Express = express();
const port: number = Number(process.env.PORT) || 3000;
const host: string = "0.0.0.0";

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(morgan("dev"));

app.use("/standups", StandupRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send({ data: "Welcome to the stashbook" });
});

app.listen(port, host, () => {
  console.log(`Stashbook application running on host: ${host}:${port}`);
});

// TODO: handle cases where the database is not running
// todo: handle cases where the dtaabase tables don't exist
