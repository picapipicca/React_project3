import React from "react";
import styled from "styled-components";

const Button = (props) => {
    const {text,_onClick,color,bgcolor} = props;
    const styles = {color: color, bgcolor: bgcolor};
  return (
    <React.Fragment>
      <ButtonTag {...styles} onClick = {_onClick }>{text}</ButtonTag>
    </React.Fragment>
  );
};
Button.defaultProps = {
  color : "#212121",
  bgcolor : false,
  text: "버튼입니다!",
  _onClick: () => {},
};

const ButtonTag = styled.button`
    width: 100%;
    background-color: #d9edd8;
    ${(props)=> props.bgcolor?`background-color : ${props.bgcolor}`:"" };
    color : ${(props) => props.color};
    padding: 12px 0px;
    box-sizing: border-box;
    border:none;
`;
export default Button;
