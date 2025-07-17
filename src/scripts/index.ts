
// const apiKey = import.meta.env.VITE_GEMINI_API_KEY!
// const genAI = new GoogleGenAI(apiKey);

// const model = 'gemini-2.0-flash';

// const generationConfig = {
//     temperature: 1,
//     topP: 0.95,
//     topK: 40,
//     maxOutputTokens: 8192,
//     responseMimeType: 'text/plain',
// }

// export const chatSession = model.startChat()

// from website

// async function main() {
//   const ai = new GoogleGenAI({
//     apiKey: import.meta.env.VITE_GEMINI_API_KEY!,
//   });
//   const config = {
//     responseMimeType: 'text/plain',
//   };
//   const model = 'gemini-2.0-flash';
//   const contents = [
//     {
//       role: 'user',
//       parts: [
//         {
//           text: `INSERT_INPUT_HERE`,
//         },
//       ],
//     },
//   ];

//   const response = await ai.models.generateContentStream({
//     model,
//     config,
//     contents,
//   });
//   let fileIndex = 0;
//   for await (const chunk of response) {
//     console.log(chunk.text);
//   }
// }

// main();

import ai from "../lib/gemini";

export async function generateContentStream(userInput: string) {
  const config = {
    responseMimeType: "text/plain",
  };
  const model = "gemini-2.0-flash";
  const contents = [
    {
      role: "user",
      parts: [
        {
          text: userInput,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  let fullText = "";

  for await (const chunk of response) {
    // console.log(chunk.text);
    if (chunk.text) {
      fullText += chunk.text;
    }
  }
  return fullText;
}
