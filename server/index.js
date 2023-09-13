import cors from "cors";
import express from "express";

const app = express();
app.use(cors());

app.get("/resumo/:id", (request, response) => {
  response.send(`ID do vídeo: ${request.params.id}`);
});

app.listen(3333, () => console.log(`O servidor está executando na porta 3333`));
