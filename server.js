import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import path from "path";
import session from "express-session";
import { fileURLToPath } from "url";
import route from "./routes/routes.js";

// ==========
// App initialization
// ==========

dotenv.config();
const { APP_HOSTNAME, APP_PORT, NODE_ENV, SECRET } = process.env;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.set("view engine", "pug");
app.locals.pretty = (NODE_ENV !== 'production'); // Indente correctement le HTML envoyé au client (utile en dev, mais inutile en production)

// ==========
// App middlewares
// ==========

app.use(express.static(path.join(__dirname, "public")));

// ==========
// App routers
// ==========

app.use("/", route);


//Connexion à la base de données

mongoose
  .connect("mongodb://localhost:27017/students")
  .then(init)

// ==========
// App start
// ==========

// 2. Démarrage de l'application Express
async function init() {
  console.log("Connexion MongoDB établie !");
  app.listen(APP_PORT, () => {
      console.log(`Server listening on http://${APP_HOSTNAME}:${APP_PORT}`);
  });
}