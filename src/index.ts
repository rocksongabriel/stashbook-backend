import express, { Express, Response, Request, NextFunction } from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import StandupRoutes from "./routes/standup.route";
import AccomplishmentRoutes from "./routes/accomplishment.route";
import BlockerRoutes from "./routes/blocker.route";
import handleError from "./middlewares/error-handler.middleware";

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
app.use("/accomplishments", AccomplishmentRoutes);
app.use("/blockers", BlockerRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send({ data: "Welcome to the stashbook" });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  handleError(err, req, res, next);

  next(err);
});

app.listen(port, host, () => {
  console.log(`Stashbook application running on host: ${host}:${port}`);
});

// TODO: handle cases where the database is not running
// todo: handle cases where the dtaabase tables don't exist
