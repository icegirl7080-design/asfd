import React, { useState } from 'react';
import { 
  ChartIcon, 
  WalletIcon, 
  ShieldIcon, 
  HomeIcon, 
  SearchIcon 
} from './components/Icons';
import ArticleCard from './components/ArticleCard';
import FinancialAIAssistant from './components/FinancialAIAssistant';
import { Article, Category } from './types';

// Mock Data for Categories
const CATEGORIES: Category[] = [
  {
    id: 'loan',
    name: '대출 꿀팁',
    icon: <WalletIcon className="w-8 h-8 text-white" />,
    description: '나에게 꼭 맞는 금리와 한도 찾기'
  },
  {
    id: 'investment',
    name: '투자/주식',
    icon: <ChartIcon className="w-8 h-8 text-white" />,
    description: '안전한 자산 증식의 첫걸음'
  },
  {
    id: 'welfare',
    name: '복지/정책',
    icon: <ShieldIcon className="w-8 h-8 text-white" />,
    description: '놓치면 손해인 정부 지원금'
  },
  {
    id: 'life',
    name: '생활 꿀팁',
    icon: <HomeIcon className="w-8 h-8 text-white" />,
    description: '일상 속 숨은 돈 찾기 프로젝트'
  }
];

// Mock Data for Featured Articles
const FEATURED_ARTICLES: Article[] = [
  {
    id: '1',
    category: '대출 가이드',
    title: '급할 때 유용한 소액 비상금 마련 3가지 전략',
    description: '갑자기 돈이 필요할 때 당황하지 마세요. 안전하게 소액을 마련하는 합법적인 방법과 주의사항을 정리했습니다.',
    imageUrl: 'https://picsum.photos/seed/finance1/800/600',
    date: '2023.10.15',
    readTime: '5분',
    keywords: ['소액', '비상금', '서민금융']
  },
  {
    id: '2',
    category: '생활 금융',
    title: '신용카드 포인트 200% 활용하는 알짜배기 팁',
    description: '매달 쌓이는 카드 포인트, 혹시 소멸시키고 있나요? 현금처럼 사용하는 방법부터 세금 납부까지 완벽 가이드.',
    imageUrl: 'https://picsum.photos/seed/credit/800/600',
    date: '2023.10.14',
    readTime: '4분',
    keywords: ['신용카드', '포인트', '절약']
  },
  {
    id: '3',
    category: '자산 관리',
    title: '잠자고 있는 자산의 똑똑한 현금화 노하우',
    description: '집안의 중고 물품부터 잊고 있던 금융 자산까지. 빠르고 안전하게 현금화하여 시드머니를 만드는 방법.',
    imageUrl: 'https://picsum.photos/seed/coin/800/600',
    date: '2023.10.12',
    readTime: '6분',
    keywords: ['현금화', '중고거래', '앱테크']
  },
  {
    id: '4',
    category: '금융 상식',
    title: '나에게 맞는 최저 금리 대출 상품 비교 가이드',
    description: '수많은 대출 상품 중 나에게 유리한 것은? 금리 비교 플랫폼 활용법과 신용점수 관리 비법을 공개합니다.',
    imageUrl: 'https://picsum.photos/seed/loan/800/600',
    date: '2023.10.10',
    readTime: '7분',
    keywords: ['대출', '금리비교', '신용점수']
  }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="#" className="text-2xl font-bold text-blue-900 tracking-tight">
                Fin<span className="text-blue-600">Life</span>
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['대출', '투자', '복지', '생활꿀팁'].map((item) => (
                <a key={item} href={`#${item}`} className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                  {item}
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <button className="p-2 text-slate-500 hover:text-blue-600 transition-colors">
                <SearchIcon className="w-5 h-5" />
              </button>
              <button 
                className="md:hidden p-2 text-slate-600"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['대출', '투자', '복지', '생활꿀팁'].map((item) => (
                <a key={item} href={`#${item}`} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50">
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        
        {/* Hero Section */}
        <section className="relative bg-slate-900 text-white py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://picsum.photos/seed/business/1920/1080" 
              alt="금융 비즈니스 배경" 
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              당신의 내일을 바꾸는 <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                금융 나침반, 핀라이프
              </span>
            </h1>
            <p className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto mb-10">
              복잡한 금융 정보를 쉽고 정확하게. <br />
              소액 투자부터 대출 관리까지, 검증된 전문가의 노하우를 만나보세요.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-blue-500/30">
                지금 시작하기
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm px-8 py-3.5 rounded-full font-semibold text-lg transition-all border border-white/20">
                인기 칼럼 보기
              </button>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16 bg-white relative -mt-16 z-20 rounded-t-3xl border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {CATEGORIES.map((cat, idx) => (
                <div key={cat.id} className="group bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-colors ${
                    idx === 0 ? 'bg-indigo-500 group-hover:bg-indigo-600' :
                    idx === 1 ? 'bg-rose-500 group-hover:bg-rose-600' :
                    idx === 2 ? 'bg-emerald-500 group-hover:bg-emerald-600' :
                    'bg-amber-500 group-hover:bg-amber-600'
                  }`}>
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{cat.name}</h3>
                  <p className="text-sm text-slate-500">{cat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Articles Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">Weekly Best</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                지금 꼭 읽어야 할 금융 정보
              </h2>
              <p className="mt-4 text-slate-600 text-lg">
                현명한 자산 관리를 위한 필수 지식을 엄선했습니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {FEATURED_ARTICLES.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>

        {/* AI Assistant Section */}
        <FinancialAIAssistant />

        {/* Trust Indicators / Quick Stats */}
        <section className="py-20 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { label: '누적 방문자', value: '150만+' },
                { label: '금융 콘텐츠', value: '5,000+' },
                { label: '구독자 수', value: '85,000+' },
                { label: '제휴 금융사', value: '32곳' },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                  <div className="text-slate-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <span className="text-2xl font-bold text-white mb-4 block">FinLife</span>
              <p className="text-sm leading-relaxed">
                핀라이프 가이드는 대한민국 모든 국민이<br/>
                현명한 금융 소비자가 되는 그날까지<br/>
                함께합니다.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">서비스</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">대출 비교</a></li>
                <li><a href="#" className="hover:text-white transition-colors">투자 가이드</a></li>
                <li><a href="#" className="hover:text-white transition-colors">복지 검색</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">고객지원</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">자주 묻는 질문</a></li>
                <li><a href="#" className="hover:text-white transition-colors">이용약관</a></li>
                <li><a href="#" className="hover:text-white transition-colors">개인정보처리방침</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">구독하기</h4>
              <p className="text-xs mb-4">매주 월요일, 알짜 금융 정보를 보내드립니다.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="이메일 주소" 
                  className="bg-slate-800 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-500 transition-colors">
                  구독
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">© 2023 FinLife Guide. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <span>본 사이트의 정보는 투자 권유가 아니며, 투자의 책임은 본인에게 있습니다.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;