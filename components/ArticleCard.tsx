import React from 'react';
import { Article } from '../types';
import { ArrowRightIcon } from './Icons';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <article className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden h-full">
      <div className="relative overflow-hidden h-48">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-slate-800 shadow-sm">
          {article.category}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
          {article.title}
        </h3>
        
        <p className="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">
          {article.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {article.keywords.map((keyword, index) => (
            <span key={index} className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-xs">
              #{keyword}
            </span>
          ))}
        </div>

        <button className="flex items-center text-blue-600 font-medium text-sm group-hover:underline">
          더 읽어보기 <ArrowRightIcon className="w-4 h-4 ml-1" />
        </button>
      </div>
    </article>
  );
};

export default ArticleCard;