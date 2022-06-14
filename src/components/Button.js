import styled from "styled-components";

const Button = styled.button`
  background-color: rgb(0, 125, 255);
  color: white;
  border: none;
  padding: ${(props) => (props.padding ? props.padding : "10px")};
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: rgba(0, 125, 255, 0.8);
    color: white;
  }
`;
export default Button;
