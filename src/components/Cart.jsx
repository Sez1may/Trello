import styled from "styled-components";

const Card = ({ card }) => {
  return <StyledDiv>{card.text}</StyledDiv>;
};

export default Card;

const StyledDiv = styled.div`
  color: #fff;
  background-color: #841616;
  font-size: 18px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  padding: 13px;
  &:hover {
    background-color: #5a1c1c;
    transform: translateY(-2px);
  }
`;
