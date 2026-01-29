import React from 'react';

export interface Article {
  id: string;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  readTime: string;
  keywords: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
}

export interface GeminiResponse {
  answer: string;
}