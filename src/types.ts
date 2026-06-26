export type Page = "home" | "about" | "products" | "blog" | "contact";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  benefits: string[];
  ingredients: string;
  imageColor: string; // for placeholder images
  imageUrl?: string;
  category: string;
}

export interface Review {
  id: string;
  stars: number;
  text: string;
  author: string;
}

export interface BlogPost {
  id: string;
  title: string;
  published: string;
  excerpt: string;
  category: string;
}
