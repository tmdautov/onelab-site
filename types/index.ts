export type DirectionItem = {
    name: string;
    date: string;
    code: number;
    briefDescription: string;
  }
  
export interface FeaturedLine {
    product: DirectionItem;
    //product: string;
}
  
export interface FeaturedState {
    catalog: DirectionItem[];
    featured: FeaturedLine[];
}