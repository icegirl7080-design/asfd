import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getFinancialAdvice = async (query: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "API 키가 설정되지 않았습니다. 환경 변수를 확인해주세요.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: `당신은 '핀라이프 가이드'의 수석 금융 컨설턴트입니다. 
        사용자의 질문에 대해 신뢰할 수 있고, 이해하기 쉬운 한국어로 답변하세요.
        답변은 3문장 이내로 핵심만 간결하게 요약하여 제공하세요.
        투자 권유나 법적 책임이 따르는 확정적 조언은 피하고, 정보 제공에 초점을 맞추세요.
        톤앤매너: 전문적이지만 친절하고 부드러운 말투.`,
        temperature: 0.7,
      }
    });

    return response.text || "죄송합니다. 현재 답변을 생성할 수 없습니다.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "일시적인 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
  }
};