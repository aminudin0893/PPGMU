import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = (import.meta as any).env?.VITE_GEMINI_API_KEY || "";

let genAI: GoogleGenerativeAI | null = null;

if (API_KEY) {
  genAI = new GoogleGenerativeAI(API_KEY);
}

export async function askAiMentor(prompt: string, context: string, userApiKey?: string) {
  const apiKeyToUse = userApiKey || API_KEY;
  
  if (!apiKeyToUse) {
    // Return a mock response if no API key is provided
    return "Maaf, fitur AI interaktif memerlukan konfigurasi API Key. Namun, secara teori: " + prompt.substring(0, 50) + "...";
  }

  const genAIInstance = new GoogleGenerativeAI(apiKeyToUse);
  const model = genAIInstance.getGenerativeModel({ model: "gemini-1.5-flash" });
  
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
    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("AI Error:", error);
    return "Terjadi kesalahan saat menghubungi asisten AI.";
  }
}
