import React, { useState } from "react";
import styled, { css } from "styled-components";
import { darkModeVar, isLoggedInVar } from "../apollo";

const Title = styled.h1`
  color: ${(props) => props.theme.fontColor};
`;

const Container = styled.div``;

const Login = () => {
  return (
    <Container>
      <Title>Login</Title>
      <button onClick={() => darkModeVar(true)}>To dark</button>
      <button onClick={() => darkModeVar(false)}>To light</button>
      <button onClick={() => isLoggedInVar(true)}>Log in now!</button>
    </Container>
  );
};

export default Login;
