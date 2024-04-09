import useGetCategories from "@hooks/useGetCategories";
import CategoryList from "./CategoryList";
import Loanding from "@componenets/feedback/Loading/Loanding";

const Category = () => {
  const { records, status, error } = useGetCategories();

  let recordsCategory;
  //Success
  if (status === "success") {
    recordsCategory =
      records.length > 0 ? (
        records.map((record) => <CategoryList key={record.id} {...record} />)
      ) : (
        <p>No Categories</p>
      );
  }

  return (
    <Loanding status={status} error={error}>
      <div className="mb-6 px-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 sm:px-3 gap-[40px]">
        {recordsCategory}
      </div>
    </Loanding>
  );
};

export default Category;
