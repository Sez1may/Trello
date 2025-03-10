import React from "react";
import HeaderMenu from "./HeaderMenu";
import HeaderProfile from "./HeaderProfile";
import styled from "styled-components";
import Board from "../components/Board";

const Header = () => {
  return (
    <StyledDiv>
      <StyledHeader>
        <HeaderMenu />
        <HeaderProfile />
      </StyledHeader>
      <section className="section">
        <Board />
      </section>
    </StyledDiv>
  );
};

export default Header;
const StyledHeader = styled.header`
  width: 100%;
  height: 60px;
  background-color: #ffffff34;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

const StyledDiv = styled.div`
  .section {
    width: 100%;
    height: 100%;
    overflow-x: scroll;
  }
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-image: url("https://i.pinimg.com/736x/2b/33/96/2b3396d83a532836811601f4cc5bc2fd.jpg");
  background-repeat: no-repeat;
`;
