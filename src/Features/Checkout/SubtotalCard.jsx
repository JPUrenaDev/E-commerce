import PropTypes from "prop-types";
import styled from "styled-components";

const SubtTotalDiv = styled.div`
  background-color: #ebeaeb;
  margin-left: 10px;
  height: 220px;
`;

const Button = styled.button`
  background-color: rgb(249 115 22);
  width: 90%;
  margin-top: 50px;
  margin-left: 25px;
  margin-right: auto;
`;
export const SubtotalCard = ({ state }) => {
  const SubTotal = state.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );

  return (
    <>
      {SubTotal > 0 && (
        <SubtTotalDiv className=" border  w-[700px] mr-6 h-[300px]  flex-col ">
          <label className="text-[30px] p-5">
            Subtotal ({state.length} items):{" "}
            <span className="font-bold">${SubTotal}</span>
          </label>
          <div className="flex items-center gap-2">
            <input type="checkbox" className="w-[40px] h-[20px]"></input>
            <label>This ordercontains a gift</label>
          </div>
          <Button>Procced to checkout</Button>
        </SubtTotalDiv>
      )}
    </>
  );
};

SubtotalCard.propTypes = {
  state: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      photo: PropTypes.string.isRequired,
      // Otros PropTypes según tus necesidades
    })
  ).isRequired,
};
