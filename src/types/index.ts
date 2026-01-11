// Type definitions for JCraft

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'artisan' | 'customer';
  createdAt: string;
  updatedAt: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  price?: number;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  status: 'new' | 'in-progress' | 'resolved';
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}