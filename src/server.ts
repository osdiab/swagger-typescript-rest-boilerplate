import * as express from "express";
import * as forceSsl from "express-force-ssl";
import * as https from 'https';
import * as http from 'http';
import * as fs from 'fs';

import {RegisterRoutes} from "./routes";
import './controllers/usersController';

const PORT = 3000;

const app = express();
RegisterRoutes(app);

if (process.env.NODE_ENV === 'production') {
  const sslOptions = {
    key: fs.readFileSync(process.env.PRIVKEY_CERT_LOC),
    cert: fs.readFileSync(process.env.FULLCHAIN_CERT_LOC),
  };
  http.createServer(app).listen(80);
  https.createServer(sslOptions, app).listen(443);
} else {
  const port = 3000;
  http.createServer(app).listen(3000, () => console.log(`Listening on port ${port}`));
}