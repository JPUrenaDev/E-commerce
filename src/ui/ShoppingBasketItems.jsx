import { FaShoppingBasket } from "react-icons/fa";
export const ShoppingBasketItems = () => {
  // const [items, setNewItem] = useState(0);
  return (
    <>
      <div className="flex items-center text-white ">
        <FaShoppingBasket size={50} color="white" className="mr-5" />
        <span className="mr-4">0</span>
      </div>
    </>
  );
};
