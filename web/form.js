import { server } from "./server.js";

const form = document.querySelector("#form");
const input = document.querySelector("#url");
const content = document.querySelector("#content");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const videoURL = input.value;

  if (!videoURL.includes("shorts")) {
    Object.assign(content, {
      textContent: "Esse vídeo não parece ser um short.",
      style: "color: var(--color-red);",
    });
    return;
  }

  const [_, params] = videoURL.split("/shorts/");
  const [videoID] = params.split("?si");

  Object.assign(content, {
    style: "color: var(--color-green);",
    textContent: "Obtendo o texto do áudio do vídeo...",
  });

  const transcription = await server.get(`/resumo/${videoID}`);

  Object.assign(content, {
    textContent: "Realizando o resumo...",
    style: "color: orange;",
  });

  const summary = await server.post("/resumo/", {
    text: transcription.data.result,
  })

  Object.assign(content, {
    textContent: summary.data.result,
    style: "color: var(--placeholder-off);",
  });

});
