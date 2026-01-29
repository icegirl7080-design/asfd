import React, { useState } from 'react';
import { RobotIcon, ArrowRightIcon } from './Icons';
import { getFinancialAdvice } from '../services/geminiService';

const FinancialAIAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setAnswer(null);
    
    // Simulate thinking time for better UX if API is instant
    const advice = await getFinancialAdvice(query);
    setAnswer(advice);
    setLoading(false);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center gap-2 bg-blue-800/50 px-4 py-2 rounded-full text-blue-200 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-700/50">
              <RobotIcon className="w-5 h-5" />
              <span>AI 금융 컨설턴트</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              궁금한 금융 정보,<br />
              <span className="text-blue-400">AI에게 무엇이든 물어보세요</span>
            </h2>
            <p className="text-blue-100/80 mb-8 text-lg">
              "사회초년생을 위한 적금 추천해줘", "신용점수 올리는 방법 알려줘" 등<br />
              평소 궁금했던 재테크 질문을 입력하면 AI가 답변해드립니다.
            </p>
          </div>

          <div className="w-full md:w-1/2 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
            <form onSubmit={handleAsk} className="relative mb-6">
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="예: 천만원으로 할 수 있는 안전한 투자는?"
                className="w-full bg-white/90 text-slate-900 placeholder-slate-500 rounded-xl py-4 pl-5 pr-14 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-inner"
              />
              <button 
                type="submit"
                disabled={loading}
                className="absolute right-2 top-2 bottom-2 bg-blue-600 hover:bg-blue-500 text-white p-2.5 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <ArrowRightIcon className="w-5 h-5" />
                )}
              </button>
            </form>

            {answer && (
              <div className="bg-white/95 rounded-xl p-6 text-slate-800 shadow-lg animate-fade-in-up">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg shrink-0">
                    <RobotIcon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-500 mb-2">AI 답변</h4>
                    <p className="text-base leading-relaxed whitespace-pre-line">{answer}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinancialAIAssistant;