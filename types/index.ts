export type ProductItem = {
    name: string,
    image: string[];
    price: number;
    code: number;
  }
  
export interface FeaturedLine {
    product: ProductItem;
    //product: string;
}
  
export interface FeaturedState {
    catalog: ProductItem[];
    featured: FeaturedLine[];
}