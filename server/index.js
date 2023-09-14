import cors from "cors";
import express from "express";

import { download } from "./download.js";
import { transcribe } from "./transcribe.js";
import { summarize } from "./summarize.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/resumo/:id", async (request, response) => {
  await download(request.params.id);
  const result = await transcribe();
  response.json({ result });
});

app.post("/resumo", async (request, response) => {
  const result = await summarize(request.body.text);
  return response.json({ result });
});

app.listen(3333, () => console.log(`O servidor está executando na porta 3333`));
