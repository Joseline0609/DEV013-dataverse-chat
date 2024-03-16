import { getApiKey } from "./apikey.js";

const sesionApiKey = getApiKey();

export const communicateWithOpenAI = async (plant, userMessage) => {
  const response = await fetch(`https://api.openai.com/v1/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + sesionApiKey,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Tu eres: ${plant}, responde de manera corta o breve y pregunta si requiere algo mas`,
        },
        {
          role: "user",
          content: userMessage,
        },
      ],
    }),
  });
  return response;
};