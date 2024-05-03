import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//loading
import LottieHandler from "@componenets/feedback/LottieHandler/LottieHandler";

//layouts
const MainLayout = lazy(() => import("@layouts/MainLayout/MainLayout"));

//pages
const Home = lazy(() => import("@pages/Home"));
const Profile = lazy(() => import("@pages/Profile"));
const Categories = lazy(() => import("@pages/Categories"));
const Products = lazy(() => import("@pages/Products"));
const AboutUs = lazy(() => import("@pages/AboutUs"));
const Login = lazy(() => import("@pages/Login"));
const Register = lazy(() => import("@pages/Register"));
const Cart = lazy(() => import("@pages/Cart"));
const Wishlist = lazy(() => import("@pages/Wishlist"));
const Orders = lazy(() => import("@pages/Orders"));

//error
import ErrorPage from "@pages/ErrorPage";

//auth protected route
import ProtectedRoute from "@componenets/Auth/ProtectedRoute";
import ProfileLayout from "@layouts/ProfileLayout/ProfileLayout";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
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
          path: "/categories/products/:prefix",
          element: <Products />,
          loader: ({ params }) => {
            if (
              typeof params.prefix !== "string" ||
              !/^[a-z]+$/i.test(params.prefix)
            ) {
              throw new Response("Bad Request", {
                statusText: "Category not found",
                status: 400,
              });
            }

            return true;
          },
        },
        {
          path: "/cart",
          element: (
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          ),
        },
        {
          path: "/wishlist",
          element: (
            <ProtectedRoute>
              <Wishlist />,
            </ProtectedRoute>
          ),
        },
        {
          path: "/about-us",
          element: <AboutUs />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "profile",
          element: (
            <ProtectedRoute>
              <ProfileLayout />
            </ProtectedRoute>
          ),
          children: [
            {
              index: true,
              element: <Profile />,
            },
            {
              path: "orders",
              element: <Orders />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <Suspense
      fallback={
        <LottieHandler message="Loading please wait..." type="loading" />
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRouter;
