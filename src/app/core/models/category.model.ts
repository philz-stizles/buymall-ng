export interface Category {
  id?: string;
  name: string;
  description?: string;
  isPublished: boolean;
  subCategories: SubCategory[];
}

export interface SubCategory {
  id?: string;
  name: string;
  description?: string;
}
