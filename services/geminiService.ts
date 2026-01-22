
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getInspiration = async (userMood: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `The user is feeling: "${userMood}". Provide a short, 3-sentence Christian inspirational encouragement. Then suggest which of these 5 themes fits best: Finding Peace, Resilient Faith, Hearing God's Voice, Morning Renewal, or Anchoring Hope.`,
      config: {
        temperature: 0.7,
        topP: 0.95,
        maxOutputTokens: 200,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "God is with you in every season. May you find His peace today as you seek His face. Keep your heart open to His leadings.";
  }
};
