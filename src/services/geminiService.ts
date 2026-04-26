import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.GEMINI_API_KEY || "";

/**
 * AI Mentor Service
 * Uses the modern @google/genai SDK as per platform requirements.
 */
export async function askAiMentor(prompt: string, context: string, userApiKey?: string) {
  const apiKeyToUse = userApiKey || API_KEY;
  
  if (!apiKeyToUse) {
    // Return a mock response if no API key is provided
    return "Maaf, fitur AI interaktif memerlukan konfigurasi API Key. Namun, secara teori: " + prompt.substring(0, 50) + "...";
  }

  const ai = new GoogleGenAI({ apiKey: apiKeyToUse });

  const fullPrompt = `
    Anda adalah Mentor Guru PAI Profesional dan Ahli Pedagogik.
    Tujuan Anda adalah membantu guru memahami materi PPG PAI dengan cara yang adaptif, interaktif, dan mendalam.
    
    KONTEKS MATERI:
    ${context}
    
    PERTANYAAN GURU:
    ${prompt}
    
    Berikan jawaban yang:
    1. Berbasis referensi akademik.
    2. Memberikan contoh konkret di kelas.
    3. Memberikan motivasi spiritual.
    4. Singkat namun padat.
    5. Gunakan bahasa Indonesia yang profesional namun hangat.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: fullPrompt,
    });
    
    return response.text || "Maaf, saya tidak bisa memberikan jawaban saat ini.";
  } catch (error) {
    console.error("AI Error:", error);
    return "Terjadi kesalahan saat menghubungi asisten AI.";
  }
}
