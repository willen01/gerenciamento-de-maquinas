import express from "express";
import DbConnection from "../domain/repositories/DbConnection";
import { router } from "./routes";
import "dotenv/config";

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  DbConnection.connect();
});
