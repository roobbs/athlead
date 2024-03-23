import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import MainScreen from "./screens/MainScreen";
import CartScreen from "./screens/CartScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import ErrorScreen from "./screens/ErrorScreen";

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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
