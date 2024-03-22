import { getApiKey } from "./apikey.js";

export const sesionApiKey = getApiKey();

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
          content: `Soy ${plant}, responderé en primera persona con mi personalidad basada en mi categoria que es ${plant.categoryPlant} y mi especie que es ${plant.name}, siguiendo el hilo de la conversacion y evitando redundar con datos ya mencionados`,
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

