import { TResponseProducts } from "./common";

export type IOrderItem = {
  id: number;
  userId: number;
  items: TResponseProducts[];
  supTotal: number;
};
