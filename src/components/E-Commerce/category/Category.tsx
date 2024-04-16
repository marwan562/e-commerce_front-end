import useGetCategories from "@hooks/useGetCategories";
import CategoryList from "./CategoryList";
import Loanding from "@componenets/feedback/Loading/Loanding";
import { GridList } from "@componenets/common";
import { TResponseCategories } from "@types";

const Category = () => {
  const { records, status, error } = useGetCategories();

  return (
    <Loanding Type="category" status={status} error={error}>
      <GridList<TResponseCategories>
        emptyMessage="There are no categories available"
        status={status}
        records={records}
        renderItem={(record) => <CategoryList {...record} />}
      />
    </Loanding>
  );
};

export default Category;
