export interface Product {
  id: string;
  name: string;
  code?: string;
  sku?: string;
  description: string;
  quantity: number;
  price: {
    regular: number;
    sale?: number;
    tax?: number;
  };
  color?: string[];
  size?: string[];
  isPublished: boolean;
  category: string;
  subcategory?: string;
  imageUrl: string;
  createdAt: string;
}
