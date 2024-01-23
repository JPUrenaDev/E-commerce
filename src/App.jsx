import "./App.css";
import { Home } from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFoundPage } from "./ui/NotFoundPage";
import { Checkout } from "./Pages/Checkout";
import { LoginPage } from "./Features/login/LoginPage";

const router = createBrowserRouter([
  {
    path: "login",
    element: <LoginPage />,
  },

  {
    path: "/",
    element: <Home />,
    errorElement: <NotFoundPage />,

    children: [
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
