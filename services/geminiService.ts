
import { GoogleGenAI, Type } from "@google/genai";
import { Bug, AIInsight } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getBugInsight = async (bug: Bug): Promise<AIInsight> => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Analyze this software bug and provide expert technical insights.
    Bug Title: ${bug.title}
    Description: ${bug.description}
    Severity: ${bug.severity}`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          rootCause: {
            type: Type.STRING,
            description: "What is likely causing this technical issue?",
          },
          fixSuggestion: {
            type: Type.STRING,
            description: "A concrete technical fix for this bug.",
          },
          preventativeMeasures: {
            type: Type.STRING,
            description: "How to prevent this bug from recurring.",
          },
        },
        required: ["rootCause", "fixSuggestion", "preventativeMeasures"],
      },
    },
  });

  const text = response.text || "{}";
  return JSON.parse(text) as AIInsight;
};
