import "./App.css";
import { Home } from "./Pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFoundPage } from "./ui/NotFoundPage";
import { Checkout } from "./Pages/Checkout";

const router = createBrowserRouter([
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
