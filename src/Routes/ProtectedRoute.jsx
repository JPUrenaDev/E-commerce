import { Home } from "../Pages/Home";
import { LoginPage } from "../Features/login/LoginPage";
const myValorPrueba = true;
export const ProtectedRoute = () => {
  if (myValorPrueba) {
    return <Home />;
  } else {
    return <LoginPage />;
  }
};
