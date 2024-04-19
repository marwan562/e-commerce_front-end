export type TStatus = "idle" | "pending" | "success" | "failed";

export type TError = null | string;

export type TResponseCategories = {
  id?: number;
  title?: string;
  prefix?: string;
  img?: string;
};

export interface ICategoriesState {
  status: TStatus;
  records: TResponseCategories[];
  error: TError;
}

export type TResponseProducts = {
  id: number;
  title: string;
  price: number;
  cat_prefix: string;
  img: string;
  quantity?: number;
  max: number;
  isLiked: boolean;
};

export interface IProductsState {
  status: TStatus;
  records: TResponseProducts[];
  error: TError;
}

export interface IResUser {
  accessToken: string 
  user: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
  } 
}

export interface IFormData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}
