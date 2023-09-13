import cors from "cors";
import express from "express";

const app = express();
app.use(cors());

app.listen(3333, () => console.log(`O servidor está executando na porta 3333`));
