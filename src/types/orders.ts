import { TResponseProducts } from "./common";

export type IOrderItem   = {
  items: TResponseProducts[];
  supTotal: number;
  id: number;
};
