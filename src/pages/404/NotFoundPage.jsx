import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <NotFoundWrapper>
      <Title>404</Title>
      <Subtitle>Oops! Something went wrong</Subtitle>
      <HomeButton to="/header">Back to homepage</HomeButton>
    </NotFoundWrapper>
  );
};

export default NotFoundPage;
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background: linear-gradient(90deg, #ff758c, #fad0c4);
  color: #fff;
`;

const Title = styled.h1`
  font-size: 6rem;
  font-weight: bold;
  margin: 0;
  text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 1s ease-in-out;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin: 20px 0;
  animation: ${fadeIn} 1.5s ease-in-out;
`;

const HomeButton = styled(Link)`
  padding: 12px 24px;
  font-size: 1.2rem;
  color: #ff758c;
  background: #fff;
  border-radius: 25px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
  animation: ${fadeIn} 2s ease-in-out;

  &:hover {
    background: #ff758c;
    color: #fff;
    box-shadow: 0px 4px 15px rgba(255, 117, 140, 0.4);
  }
`;
