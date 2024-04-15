import useGetCategories from "@hooks/useGetCategories";
import CategoryList from "./CategoryList";
import Loanding from "@componenets/feedback/Loading/Loanding";
import { GridList } from "@componenets/common";
import { TResponseCategories } from "@customTypes";

const Category = () => {
  const { records, status, error } = useGetCategories();

  return (
    <Loanding status={status} error={error}>
      <GridList<TResponseCategories>
        status={status}
        records={records}
        renderItem={(record) => <CategoryList {...record} />}
      />
    </Loanding>
  );
};

export default Category;
