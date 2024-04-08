export type TResponseCategories = {
  id?: number;
  titles?: string;
  prefix?: string;
  img?: string;
};

export interface ICategoriesState {
  status: "idle" | "pending" | "success" | "failed";
  records: TResponseCategories[];
  error: null | string;
}
