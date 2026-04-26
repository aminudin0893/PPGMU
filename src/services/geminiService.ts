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
    Tujuan Anda adalah membantu guru memahami materi PPG PAI, materi SMP, parenting, dan psikologi anak dengan cara yang adaptif, interaktif, dan mendalam.

    ATURAN JAWABAN:
    1. Gunakan Bahasa Indonesia yang baku dan sesuai dengan EYD (Ejaan Yang Disempurnakan).
    2. Jawaban harus TERTATA RAPI dan TERSTRUKTUR. Gunakan heading (###), poin-poin (bullet points), dan penebalan teks (bold) untuk poin penting.
    3. Jika menjelaskan konsep, berikan: Definisi, Contoh Nyata, dan Tips Praktis.
    4. Hindari paragraf yang terlalu panjang; pecah menjadi bagian-bagian kecil yang mudah dibaca.
    5. Selalu berikan motivasi di akhir jawaban.

    KONTEKS MATERI:
    ${context}

    PERTANYAAN GURU:
    ${prompt}
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ role: "user", parts: [{ text: fullPrompt }] }],
    });
    
    return response.text || "Maaf, saya tidak bisa memberikan jawaban saat ini.";
  } catch (error) {
    console.error("AI Error:", error);
    return "Terjadi kesalahan saat menghubungi asisten AI. Mohon pastikan koneksi stabil dan coba lagi.";
  }
}
