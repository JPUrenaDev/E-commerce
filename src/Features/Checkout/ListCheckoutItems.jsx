import PropTypes from "prop-types";
import { RatingStars } from "../../ui/RatingStars";

export const ListCheckoutItems = ({ items, dispatch }) => {
  return (
    <>
      <div className="flex items-center w-[70%] gap-4 ">
        <img width={"300px"} src={items.photo}></img>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-[23px]">{items.Name}</h3>
          <label className="font-bold text-[23px]">$ {items.price}</label>

          <RatingStars />
          <button
            className="bg-orange-400 w-[210px]"
            onClick={() =>
              dispatch({ type: "deleteFromBasket", payload: items })
            }
          >
            Remove from Basket
          </button>
        </div>
      </div>
    </>
  );
};
ListCheckoutItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      photo: PropTypes.string.isRequired,
      // Otros PropTypes según tus necesidades
    })
  ).isRequired,
  dispatch: PropTypes.any,
};
