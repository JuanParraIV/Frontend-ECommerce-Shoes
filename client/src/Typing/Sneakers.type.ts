export interface SneakersType {
  id: number;
  brand_name: string;
  category_name: string[];
  name: string;
  color: string;
  retail_price_cents: number;
  size_range: number[];
  grid_picture_url: string;
  original_picture_url: string;
  main_picture_url: string;
  details: string;
  has_stock: boolean;
  status: string;
  brandId: number;
  categoryId: number;
  isFavorite?: boolean
}

