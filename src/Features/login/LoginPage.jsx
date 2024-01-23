import styled from "styled-components";
import { BsShop } from "react-icons/bs";

const DivLoginPage = styled.div`
  width: 100vw;
  height: 500px;
  display: flex;

  place-items: center;
  margin-right: auto;
  margin-left: auto;

  /* Center vertically */
`;

const Divform = styled.div`
  background-color: white;
  width: 440px;
  height: 460px;
  border: 2px solid;
  border-color: #b0afb0;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding: 5px;
`;

const InputForm = styled.input`
  width: 93%;
  height: 44px;
  border: 2px solid;
  border-color: #b0afb0;
`;

const Label = styled.label`
  width: 93%;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 8px;
`;

export const LoginPage = () => {
  return (
    <>
      <div className="flex gap-2  w-[440px]  ml-auto mr-auto  mt-[70px] ">
        <div className="  flex items-center mr-auto ml-auto mt-auto mb-auto gap-4">
          <BsShop color="orange" size={40} className=" cursor-pointer" />
          <label className="font-bold text-[20px]">JeanShop</label>
        </div>
      </div>

      <DivLoginPage>
        <Divform className="shadow-md rounded-md  ">
          <Label className="font-semibold text-[30px]">Sign-in</Label>
          <Label className="font-semibold  w-[93%] ml-auto mr-auto">
            E-mail
          </Label>
          <InputForm
            type="email"
            className="mr-auto ml-auto rounded-md"
          ></InputForm>
          <Label className="font-semibold">Password</Label>
          <InputForm
            className="mr-auto ml-auto rounded-md"
            type="email"
          ></InputForm>
          <button
            type="button"
            className="bg-orange-500 rounded-md text-black p-2 w-[93%] mr-auto mb-5 ml-auto mt-6 shadow-md"
          >
            Sign In
          </button>
          <label className="w-[93%] mr-auto ml-auto mb-4">
            By signing-in you agrew to the jean-shop Website Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </label>

          <button className="w-[93%] ml-auto mr-auto rounded-mdg bg-slate-300 p-1 font-semibold shadow-md">
            Create your JeanShop Account
          </button>
        </Divform>
      </DivLoginPage>
    </>
  );
};
