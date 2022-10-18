import * as dotenv from 'dotenv';
dotenv.config();
import express, { Express, Request, Response } from "express";
import path from 'path';
import routes from "./routes";

// create express app
const app = express();
// Use json in express
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));

// Create routes imported from routes
app.use(routes);
// Port configuration
export const port = process.env.SERVE_PORT || 8080;

app.listen(port, () => {
  console.log("Server has started in port: " + port );
});
