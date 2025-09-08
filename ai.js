import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({})

export async function main(query) {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: query,
        config: {
            thinkingConfig: {
                thinkingBudget: 0, // Disables thinking
            },
        }
    });
    return response
}

// await main("write 20 random words")


