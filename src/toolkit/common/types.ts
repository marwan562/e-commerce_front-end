export type TStatus = "idle" | "pending" | "success" | "failed";

export type TError = null | string;

export type TResponseCategories = {
  id?: number;
  titles?: string;
  prefix?: string;
  img?: string;
};

export interface ICategoriesState {
  status: TStatus;
  records: TResponseCategories[];
  error: TError;
}

export type TResponseProducts = {
  id?: number;
  title: string;
  price: string;
  cat_prefix: string;
  img: string;
  quantity?: number;
};

export interface IProductsState {
  status: TStatus;
  records: TResponseProducts[];
  error: TError;
}
