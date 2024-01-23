import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFoundPage } from "./ui/NotFoundPage";
import { Checkout } from "./Pages/Checkout";
import { LoginPage } from "./Features/login/LoginPage";
import { Items } from "./Features/Items/Items";
import { ProtectedRoute } from "./Routes/ProtectedRoute";
import { useAddNewItemsToTheBasket } from "./reducer/useAddNewItemsToTheBasket";
import { MyContext } from "./context/itemsContext";
const router = createBrowserRouter([
  {
    path: "login",
    element: <LoginPage />,
  },

  {
    path: "/",
    element: <ProtectedRoute />,
    errorElement: <NotFoundPage />,

    children: [
      {
        path: "items",
        element: <Items />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
]);
function App() {
  const { state, dispatch } = useAddNewItemsToTheBasket();
  return (
    <>
      <MyContext.Provider value={{ state, dispatch }}>
        <RouterProvider router={router} />
      </MyContext.Provider>
    </>
  );
}

export default App;
