import { Outlet } from "react-router-dom";
import { Header } from "../ui/Header";
import styled from "styled-components";

const DivCoverBackground = styled.div`
  background-image: url("public/img/1_34GfkhLFydPjZWUde1EzRg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #f2f2f2;
  height: 100vh;
`;
export const Home = () => {
  return (
    <>
      <Header />

      <DivCoverBackground>
        <Outlet />
      </DivCoverBackground>
    </>
  );
};
