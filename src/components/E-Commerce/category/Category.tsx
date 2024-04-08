import { actGetCategories } from "@toolkit/categories/categoriesSlice";
import { useAppSelector, useAppDispatch } from "@toolkit/hooks";
import { useEffect } from "react";
import CategoryList from "./CategoryList";

const Category = () => {
  const dispatch = useAppDispatch();
  const { status, records, error } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(actGetCategories());
  }, [dispatch]);

  let recordsCategory;
  //Pending
  if (status === "pending") return (recordsCategory = <p>loading</p>);
  //Success
  if (status === "success") {
    recordsCategory =
      records.length > 0 ? (
        records.map((record) => <CategoryList key={record.id} {...record} />)
      ) : (
        <p>No Categories</p>
      );
  }
  //Failed
  if (status === "failed") return (recordsCategory = <p>{error.message}</p>);

  return (
    <div className="mb-6 px-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 sm:px-3 gap-[40px]">
      {recordsCategory}
    </div>
  );
};

export default Category;
