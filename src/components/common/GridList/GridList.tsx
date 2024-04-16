import EmptyProducts from "@componenets/feedback/EmptyProducts/EmptyProducts";
import { TResponseCategories, TStatus } from "@types";
import { ReactNode } from "react";

type GridListProps<T> = {
  status: TStatus;
  records: T[];
  renderItem: (record: T) => ReactNode;
};

const GridList = <T extends TResponseCategories>({
  renderItem,
  records,
  status,
}: GridListProps<T>) => {
  let recordsCategory;
  //Success
  if (status === "success") {
    recordsCategory =
      records.length > 0 ? (
        <div className="mb-6 px-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:px-3 gap-[40px]">
          {records.map((record) => (
            <div key={record?.id}> {renderItem(record)}</div>
          ))}
        </div>
      ) : (
        <EmptyProducts/>
      );
  }
  return recordsCategory;
};
export default GridList;
