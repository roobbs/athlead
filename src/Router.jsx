import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import MainScreen from "./screens/MainScreen";
import CartScreen from "./screens/CartScreen";
import ErrorScreen from "./screens/ErrorScreen";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      errorElement: <ErrorScreen />,
      children: [
        { index: true, element: <MainScreen /> },
        { path: "cart", element: <CartScreen /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
