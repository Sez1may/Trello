import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { RiInformation2Line } from "react-icons/ri";
import { TiAdjustContrast } from "react-icons/ti";
import styled from "styled-components";
import { Modal } from "../UI/Modal";

const HeaderProfile = () => {
  const [open, setOpen] = useState(false);
  const HandleSbm = () => {
    setOpen(true);
  };
  const handleLogOut = () => {
    localStorage.removeItem("auth");
    window.location.pathname = "/";
  };
  return (
    <StyledContainer>
      <input type="text" placeholder="  🔍   Поиск" />
      <StyledSection>
        <MdOutlineNotificationsActive color="white" fontSize={27} />
        <RiInformation2Line color="white" fontSize={27} />
        <TiAdjustContrast color="white" fontSize={37} />
        <CgProfile
          color="white"
          fontSize={25}
          onClick={HandleSbm}
          cursor={"pointer"}
        />
      </StyledSection>
      {open && (
        <Modal>
          <StyledpTag>Вы уверены, что хотите выйти?</StyledpTag>
          <StyledDiv>
            <button onClick={handleLogOut} className="Выйти">
              Выйти
            </button>
            <button onClick={() => setOpen(false)} className="Отмена">
              Отмена
            </button>
          </StyledDiv>
        </Modal>
      )}
    </StyledContainer>
  );
};

export default HeaderProfile;
const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  input {
    width: 200px;
    height: 30px;
    background-color: gray;
    border: none;
    border-radius: 5px;
    font-size: 15px;
  }
  ::placeholder {
    color: #fff;
  }
`;
const StyledSection = styled.section`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const StyledpTag = styled.p`
  display: flex;
  justify-content: center;
  font-size: 25px;
`;
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  gap: 15px;
  .Выйти {
    padding: 10px 20px;
    border: 1px solid #3c5f7e;
    background-color: white;
    color: black;
    border-radius: 10px;
    box-shadow: none;
    &:hover {
      border: none;
      background-color: #3f5d77;
      color: white;
    }
  }
  .Отмена {
    padding: 10px 20px;
    border: 1px solid #16496a;
    background-color: white;
    color: black;
    border-radius: 10px;
    box-shadow: none;
    &:hover {
      border: none;
      background-color: #1f587b;
      color: white;
    }
  }
`;
