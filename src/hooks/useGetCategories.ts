import { actGetCategories } from "@toolkit/categories/categoriesSlice";
import { useAppSelector, useAppDispatch } from "@toolkit/hooks";
import { useEffect } from "react";

const useGetCategories = () => {
  const dispatch = useAppDispatch();
  const { status, records, error } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    if (!records.length) {
      dispatch(actGetCategories());
    }
  }, [dispatch, records.length]);

  return { records, error, status };
};

export default useGetCategories;
