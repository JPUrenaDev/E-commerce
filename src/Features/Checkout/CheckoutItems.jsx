import { useContext } from "react";
import { MyContext } from "../../context/itemsContext";
import { SubtotalCard } from "./SubtotalCard";
import { ListCheckoutItems } from "./ListCheckoutItems";
import { Ads } from "./Ads";

export const CheckoutItems = () => {
  const { state, dispatch } = useContext(MyContext);
  return (
    <div className="w-[100%] ml-4   ">
      <div className="flex">
        <Ads />
        <SubtotalCard state={state} />
      </div>

      <label className="font-bold text-[23px]">Your shopping Baskets</label>

      <div className="flex flex-col gap-6">
        {state.map((items, index) => (
          <ListCheckoutItems key={index} items={items} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
};
