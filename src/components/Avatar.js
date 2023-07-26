import React from "react";
import { styled } from "styled-components";

const Avatar = ({ url = "" }) => {
  return <SAvatar>{url !== "" ? <Img src={url} /> : null}</SAvatar>;
};

const SAvatar = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 15px;
`;

const Img = styled.img`
  max-width: 100%;
`;

export default Avatar;
