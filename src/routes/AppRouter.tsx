import { createBrowserRouter, RouterProvider } from "react-router-dom";

//layouts
import MainLayout from "@layouts/MainLayout/MainLayout";

//pages
import Home from "@pages/Home";
import Categories from "@pages/Categories";
import Products from "@pages/Products";
import AboutUs from "@pages/AboutUs";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/categories",
          element: <Categories />,
        },
        {
          path: "/products:prefix",
          element: <Products />,
        },
        {
          path: "/about-us",
          element: <AboutUs />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
