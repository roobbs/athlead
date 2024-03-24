import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import MainScreen from "./screens/MainScreen";
import CartScreen from "./screens/CartScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import ErrorScreen from "./screens/ErrorScreen";
import ProductScreen from "./screens/ProductScreen";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      errorElement: <ErrorScreen />,
      children: [
        { index: true, element: <MainScreen /> },
        { path: "cart", element: <CartScreen /> },
        { path: "favorites", element: <FavoritesScreen /> },
        { path: "product/:productId", element: <ProductScreen /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
