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

const SignUp = () => {
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
          <form>
            <Button type="submit" value="Log in with Facebook" />
            <Separator />
            <Input type="text" placeholder="Mobile Number or Email" />
            <Input type="text" placeholder="Full Name" />
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password" />
            <Info>
              People who use our service may have uploaded your contact
              information to Instagram. Learn more
            </Info>
            <Button type="submit" value="Sign up" />
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
