import styled from "styled-components";
import { SearchProductBar } from "./SearchProductBar";
import { BsShop } from "react-icons/bs";
import { ShoppingBasketItems } from "./ShoppingBasketItems";
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
      <BsShop color="yellow" size={50} className="ml-4" />
      <Span>JeanShop</Span>
      <SearchProductBar />
      <div className="text-white">
        Hello Guest <span className="font-bold">Sign Ins</span>
      </div>
      <div className="text-white">Your Shop</div>
      <ShoppingBasketItems />
    </DivHeader>
  );
};
