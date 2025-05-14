import cors from "cors";
import express from "express";
import { getDataGare } from "./functions/data-gare.js";
import { getData } from "./functions/data.js";
import { getHello } from "./functions/hello.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/hello", getHello);
app.get("/data", getData);
app.get("/data-gare", getDataGare);

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
