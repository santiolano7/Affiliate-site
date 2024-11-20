export interface Deal {
  id: string;
  retailer: string;
  category: string;
  cashbackPercent: number;
  logo: string;
  description: string;
  terms?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}