import { styled } from "styled-components";

const SButton = styled.input`
  border: none;
  border-radius: 8px;
  margin-top: 12px;
  background-color: ${(props) => props.theme.accent};
  color: white;
  text-align: center;
  padding: 8px 0px;
  font-weight: 600;
  width: 100%;
  cursor: pointer;
`;

const Button = (props) => {
  return <SButton {...props} />;
};

export default Button;
