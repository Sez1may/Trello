import { CgMenuGridO } from "react-icons/cg";
import { FaTrello } from "react-icons/fa";
import { headerContent } from "../utils/constants/general";
import { HiChevronDown } from "react-icons/hi";
import styled from "styled-components";

const HeaderMenu = () => {
  return (
    <StyledHeader>
      <CgMenuGridO color="white" fontSize={30} />
      <StyledSection>
        <FaTrello color="white" fontSize={25} />
        <h2>Trello</h2>
      </StyledSection>
      <StyledArt>
        {headerContent.map((item) => (
          <StyledDiv key={item.id}>
            <p>{item.title}</p>
            <HiChevronDown color="white" />
          </StyledDiv>
        ))}
      </StyledArt>
      <button className="createBtn">Создать</button>
    </StyledHeader>
  );
};

export default HeaderMenu;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  .createBtn {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #706f6f;
    color: #fff;
    margin-left: 10px;
  }
`;

const StyledSection = styled.section`
  margin-left: 15px;
  display: flex;
  align-items: center;
  gap: 5px;
  h2 {
    color: #fff;
    font-size: 30px;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 18px;
    color: #fff;
  }
`;

const StyledArt = styled.article`
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
