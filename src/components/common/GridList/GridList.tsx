import { TResponseCategories, TStatus } from "@toolkit/common/types";

type GridListProps<T> = {
  status: TStatus;
  records: T[];
  renderItem: (record: T) => JSX.Element;
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
        <p>No Categories</p>
      );
  }
  return recordsCategory;
};
export default GridList;
