import { Category } from "@componenets/E-Commerce";

const Categories = () => {
  return (
    <div className=" mb-6  grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 sm:px-3 gap-[40px] ">
      <div>
        <Category />
      </div>
      <div>
        <Category />
      </div>
      <div>
        <Category />
      </div>
      <div>
        <Category />
      </div>
      <div>
        <Category />
      </div>
      <div>
        <Category />
      </div>
    </div>
  );
};

export default Categories;
