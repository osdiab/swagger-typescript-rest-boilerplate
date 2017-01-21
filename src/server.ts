import * as express from "express";
import {RegisterRoutes} from "./routes";

import './controllers/usersController';

const PORT = 3000;

const app = express();
RegisterRoutes(app);

console.log("Starting server...");
app.listen(PORT, () => console.log(`Listening on ${PORT}...`));
