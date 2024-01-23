import { FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../context/itemsContext";

export const ShoppingBasketItems = () => {
  const { state } = useContext(MyContext);
  // const [items, setNewItem] = useState(0);
  return (
    <>
      <div className="flex items-center text-white gap-0 ">
        <Link to={"checkout"}>
          <FaShoppingBasket size={40} color="white" className="mr-5" />
        </Link>
        <span className="mr-4">{state.length}</span>
      </div>
    </>
  );
};
