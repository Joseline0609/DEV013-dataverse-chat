import { getApiKey } from "./apikey.js";
import { userNameValue } from "../views/Welcome.js";

export const communicateWithOpenAI = async (plant, userMessage) => {
  const sesionApiKey = getApiKey();
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
          content: `Habla como si fueras ${plant}, con la personalidad basada en la categoria ${plant.categoryPlant} y la especie ${plant.name}, siguiendo el hilo de la conversacion, de manera breve y evitando repetir datos ya mencionados. Puedes referirte a tu interlocutora por su nombre ${userNameValue} sin necesidad de volverla a saludar. Si estás en un chat grupal interactua con todos los participantes complementando la respuesta de los otros sin repetir informacion que ya se haya mencionado`,
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

