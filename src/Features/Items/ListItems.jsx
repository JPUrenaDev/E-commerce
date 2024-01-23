import PropTypes from "prop-types";
import { RatingStars } from "../../ui/RatingStars";
import { useContext } from "react";
import { MyContext } from "../../context/itemsContext";
export const ListItems = ({ items }) => {
  const { dispatch } = useContext(MyContext);
  return (
    <>
      <div
        className={`${items.id == 5 && "col-span-full"} ${items.id == 1 && " col-start-1 col-end-3"} ${items.id == 2 && "col-start-3 col-end-5"} p-[40px]  flex flex-col mt-4 h-[100%] bg-white`}
      >
        <label>{items.Name}</label>
        <label className="font-bold">$ {items.price}</label>
        <RatingStars />

        <img
          className="w-[300px] h-[240px] bg-black ml-auto mr-auto"
          src={items.photo}
          alt=""
        />
        <div className="bg-black w-[30%] ml-auto mr-auto ">
          <button
            onClick={() => dispatch({ type: "addItem", payload: items })}
            className="bg-orange-500 p-1 ml-auto mr-auto w-[100%] h-[100%]"
          >
            Add to basket
          </button>
        </div>
      </div>
    </>
  );
};
ListItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      photo: PropTypes.string.isRequired,
      // Otros PropTypes según tus necesidades
    })
  ).isRequired,
};
