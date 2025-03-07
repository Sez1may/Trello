import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { SignInRequest } from "../store/thunks/authThunk";
import styled from "styled-components";
import { FaTrello } from "react-icons/fa";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const SubmitHandler = (userData) => {
    dispatch(SignInRequest({ userData, navigate }));
  };

  return (
    <PageContainer>
      <LoginCard>
        <IconWrapper>
          <FaTrello color="#1d6db7" fontSize={60} />
          <h1>Trello</h1>
        </IconWrapper>
        <form onSubmit={handleSubmit(SubmitHandler)}>
          <InputField
            type="email"
            placeholder="Email Address"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
          />
          <ErrorText>{errors.email?.message}</ErrorText>

          <InputField
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          <ErrorText>{errors.password?.message}</ErrorText>

          <SubmitButton type="submit">Log in</SubmitButton>
          <LinkText href="#">Forgot password?</LinkText>
          <LinkText href="#" onClick={() => navigate("/signUp")}>
            Sign Up
          </LinkText>
        </form>
      </LoginCard>
    </PageContainer>
  );
};

export default SignIn;

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #1d6db7, #134e9e);
`;

const LoginCard = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 350px;

  h2 {
    margin-bottom: 20px;
    color: #333;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  h1 {
    font-size: 45px;
    color: #144d83;
  }
`;

export const InputField = styled.input`
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  background: #f5f5f5;
  font-size: 16px;

  &:focus {
    outline: none;
    background: #eaeaea;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 20px;
  background: #1d6db7;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #134e9e;
  }
`;

const LinkText = styled.a`
  display: block;
  margin-top: 15px;
  color: #1d6db7;
  text-decoration: none;
  font-size: 17px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const ErrorText = styled.span`
  color: red;
  font-size: 12px;
  display: block;
  margin-top: 5px;
`;
