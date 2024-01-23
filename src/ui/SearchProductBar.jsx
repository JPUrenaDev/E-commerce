import styled from "styled-components";
import { FaMagnifyingGlass as Lupa } from "react-icons/fa6";

const InputSearchProduct = styled.input`
  height: 100%;
  width: 100%;
`;

const FaMagnifyingGlass = styled(Lupa)`
  margin-top: 6px;
  margin-left: 6px;
`;

const DivSearchProductBar = styled.div`
  height: 50%;
  width: 100%;
  position: relative;
  margin-left: 10px;
`;

const GlassColorDiv = styled.div`
  background-color: #fc9d05;
  width: 30px;
  position: absolute;
  top: 0px;
  right: 0px;
  height: 100%;

  cursor: pointer;
`;

export const SearchProductBar = () => {
  return (
    <>
      <DivSearchProductBar>
        <InputSearchProduct />
        <GlassColorDiv className="hover:bg-yellow-300">
          <FaMagnifyingGlass />
        </GlassColorDiv>
      </DivSearchProductBar>
    </>
  );
};
