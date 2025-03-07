import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { SignUpRequest } from "../store/thunks/authThunk";
import { FaTrello } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const SubmitHandler = (userData) => {
    dispatch(SignUpRequest({ userData, navigate }));
  };

  return (
    <Container>
      <Header>
        <FaTrello color="#fff" fontSize={50} />
        <h1>Trello</h1>
      </Header>
      <FormWrapper>
        <h2>Register for Trello</h2>
        <form onSubmit={handleSubmit(SubmitHandler)}>
          <Input
            type="text"
            placeholder="First Name"
            {...register("firstName", { required: "Enter your first name" })}
          />
          <ErrorMessage>{errors?.firstName?.message}</ErrorMessage>

          <Input
            type="text"
            placeholder="Last Name"
            {...register("lastName", { required: "Enter your last name" })}
          />
          <ErrorMessage>{errors?.lastName?.message}</ErrorMessage>

          <Input
            type="email"
            placeholder="Email Address"
            {...register("email", {
              required: "Enter a valid email",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
          />
          <ErrorMessage>{errors?.email?.message}</ErrorMessage>

          <Input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Enter a password",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          <ErrorMessage>{errors?.password?.message}</ErrorMessage>

          <SubmitButton type="submit">Sign Up</SubmitButton>
        </form>
      </FormWrapper>
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
  margin-bottom: 20px;
  h1 {
    margin-left: 10px;
  }
`;

const FormWrapper = styled.div`
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 350px;
  color: black;

  h2 {
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;

const Input = styled.input`
  padding: 12px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: #667eea;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  padding: 12px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: #764ba2;
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;
`;
