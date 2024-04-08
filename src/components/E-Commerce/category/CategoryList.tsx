import { TResponseCategories } from "@toolkit/common/types";
import { Link } from "react-router-dom";

const CategoryList = ({ img, titles, prefix }: TResponseCategories) => {
  return (
    <>
      <Link
        to={`/categories/products/${prefix}`}
        className="group relative opacity-90    transition-all duration-200  hover:opacity-100 block hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl  hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] "
      >
        <div className="relative h-[350px] sm:h-[450px]">
          <img
            src={img}
            alt={titles}
            className=" rounded-md  h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
          <h3 className="text-xl font-medium text-white">Skinny Jeans Blue</h3>

          <p className="mt-1.5 text-pretty text-xs text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            sequi dicta impedit aperiam ipsum!
          </p>

          <span className="mt-3 inline-block bg-gray-700 hover:bg-gray-500 rounded-sm  px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
            Shop Now
          </span>
        </div>
      </Link>
    </>
  );
};

export default CategoryList;