import React from "react";
import AuthLayout from "../components/auth/AuthLayout";
import BottomBox from "../components/auth/BottomBox";
import FormBox from "../components/auth/FormBox";
import routes from "../routes";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../components/auth/Button";
import Separator from "../components/auth/Separator";
import Input from "../components/auth/Input";
import { styled } from "styled-components";
import { HelmetProvider } from "react-helmet-async";
import PageTitle from "../components/PageTitle";
import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Subtitle = styled.h3`
  font-weight: 600;
  color: #737373;
  font-size: 17px;
  text-align: center;
  margin-top: 10px;
`;

const Info = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 12px;
  color: #737373;
`;

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $firstName: String!
    $lastName: String
    $username: String!
    $email: String!
    $password: String!
  ) {
    createAccount(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    ) {
      ok
      error
    }
  }
`;

const SignUp = () => {
  const history = useHistory();
  const onCompleted = (data) => {
    const {
      createAccount: { ok, error },
    } = data;
    if (!ok) {
      return;
    }
    history.push(routes.home);
  };
  const [createAccount, { loading }] = useMutation(CREATE_ACCOUNT_MUTATION, {
    onCompleted,
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });
  const onSubmitValid = (data) => {
    if (loading) {
      return;
    }
    createAccount({
      variables: {
        ...data,
      },
    });
  };

  return (
    <HelmetProvider>
      <AuthLayout>
        <PageTitle title={"Sign Up"} />
        <FormBox>
          <HeaderContainer>
            <FontAwesomeIcon icon={faInstagram} size="3x" />
            <Subtitle>
              Sign up to see photos and videos from your friends.
            </Subtitle>
          </HeaderContainer>
          <form onSubmit={handleSubmit(onSubmitValid)}>
            <Button type="submit" value="Log in with Facebook" />
            <Separator />
            <Input
              {...register("firstName", {
                required: "First name is required.",
              })}
              type="text"
              placeholder="First Name"
            />
            <Input
              {...register("lastName", {
                required: "Last name is required.",
              })}
              type="text"
              placeholder="Last Name"
            />
            <Input
              {...register("username", {
                required: "Username is required.",
              })}
              type="text"
              placeholder="Username"
            />
            <Input
              {...register("email", {
                required: "Email is required.",
              })}
              type="text"
              placeholder="Email"
            />
            <Input
              {...register("password", {
                required: "Password is required.",
              })}
              type="password"
              placeholder="Password"
            />
            <Info>
              People who use our service may have uploaded your contact
              information to Instagram. Learn more
            </Info>
            <Button
              type="submit"
              value={loading ? "Loading..." : "Sign Up"}
              disabled={!isValid || loading}
            />
          </form>
        </FormBox>
        <BottomBox
          cta="Have an account?"
          link={routes.home}
          linkText="Log in"
        />
      </AuthLayout>
    </HelmetProvider>
  );
};

export default SignUp;
