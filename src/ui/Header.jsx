import styled from "styled-components";
import { SearchProductBar } from "./SearchProductBar";
import { BsShop } from "react-icons/bs";
import { ShoppingBasketItems } from "./ShoppingBasketItems";
import { Link } from "react-router-dom";
const DivHeader = styled.div`
  background-color: #131821;
  width: 100%;
  min-width: 820px;
  height: 60px;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
`;

const Span = styled.span`
  color: white;
  font-weight: bold;
`;

export const Header = () => {
  return (
    <DivHeader>
      <Link to={"/items"}>
        {" "}
        <BsShop color="yellow" size={40} className="ml-4 cursor-pointer" />{" "}
      </Link>
      <Span>JeanShop</Span>
      <SearchProductBar />
      <Link to={"login"}>
        <div className="text-white">
          Hello Guest <span className="font-bold">Sign In</span>
        </div>
      </Link>
      <div className="text-white">Your Shop</div>

      <ShoppingBasketItems />
    </DivHeader>
  );
};
