import express from "express";
import { getHello } from "./functions/hello.js";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/hello", getHello);

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
