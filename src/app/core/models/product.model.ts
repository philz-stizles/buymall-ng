export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  isPublished: boolean;
  category: string;
  imageUrl: string;
  createdAt: string;
}
