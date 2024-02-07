export interface User {
  uid: number;
  name: string;
  email: string;
  credit: number;
  recipes: [];
}

export interface Recipe {
  id: string;
  foodName: string;
  recipe: string | null;
}
