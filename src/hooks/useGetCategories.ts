import {
  actGetCategories,
  cleanUpCategories,
} from "@toolkit/categories/categoriesSlice";
import { useAppSelector, useAppDispatch } from "@toolkit/hooks";
import { useEffect } from "react";

const useGetCategories = () => {
  const dispatch = useAppDispatch();
  const { status, records, error } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    const Promise = dispatch(actGetCategories());

    return () => {
      Promise.abort();
      dispatch(cleanUpCategories());
    };
  }, [dispatch]);

  return { records, error, status };
};

export default useGetCategories;
