import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import { HelmetProvider } from "react-helmet-async";
import { useForm } from "react-hook-form";

import routes from "../routes";
import AuthLayout from "../components/auth/AuthLayout";
import Button from "../components/auth/Button";
import Separator from "../components/auth/Separator";
import Input from "../components/auth/Input";
import FormBox from "../components/auth/FormBox";
import BottomBox from "../components/auth/BottomBox";

import PageTitle from "../components/PageTitle";
import FormError from "../components/auth/FormError";

const FacebookLogin = styled.div`
  color: #385285;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmitValid = (data) => {
    // console.log(data);
  };

  return (
    <HelmetProvider>
      <AuthLayout>
        <PageTitle title={"Login"} />
        <FormBox>
          <div>
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </div>
          <form onSubmit={handleSubmit(onSubmitValid)}>
            <Input
              {...register("username", {
                required: "Username is required",
                minLength: {
                  value: 5,
                  message: "Username should be longer than 5 chars.",
                },
              })}
              type="text"
              placeholder="Username"
              hasError={Boolean(errors?.username?.message)}
            />
            <FormError message={errors?.username?.message} />
            <Input
              {...register("password", {
                required: "Password is required",
                minLength: 5,
              })}
              type="password"
              placeholder="Password"
              hasError={Boolean(errors?.password?.message)}
            />
            <FormError message={errors?.password?.message} />
            <Button type="submit" value="Log in" disabled={!isValid} />
          </form>
          <Separator />
          <FacebookLogin>
            <FontAwesomeIcon icon={faFacebookSquare} />
            <span>Log in with Facebook</span>
          </FacebookLogin>
        </FormBox>
        <BottomBox
          cta="Don't have an account?"
          link={routes.signUp}
          linkText="Sign Up"
        />
      </AuthLayout>
    </HelmetProvider>
  );
};

export default Login;
