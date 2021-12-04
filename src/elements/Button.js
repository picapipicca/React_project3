import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { _disabled, text, _onClick, color, bgcolor, is_float, children, margin, width, padding } =
    props;

  if (is_float) {
    return (
      <React.Fragment>
        <FloatButton onClick={_onClick}> {text ? text : children} </FloatButton>
      </React.Fragment>
    );
  }
  const styles = {
    color: color,
    bgcolor: bgcolor,
    margin: margin,
    width: width,
    padding: padding,
  };
  
  return (
    <React.Fragment>
      <ButtonTag {...styles} disabled = {_disabled} onClick={_onClick}>
        {text ? text : children}
      </ButtonTag>
    </React.Fragment>
  );
};

Button.defaultProps = {
  color: "#212121",
  bgcolor: false,
  text: false,
  _onClick: () => {},
  is_float: false,
  children: null,
  margin: false,
  width: "100%",
  padding : "12px 0px;",
  _disabled:false,
};

const ButtonTag = styled.button`
  width: ${ (props) => props.width};
  ${(props)=> (props.margin? `margin : ${props.margin};`: "")};
  background-color: ${((props)=>props.disabled? "#cad4c9":"#d9edd8")};
  ${(props) => (props.bgcolor ? `background-color : ${props.bgcolor};` : "")};
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  border: none;
`;

const FloatButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: ${((props)=>props.disabled? "#cad4c9":"#d9edd8")};
  color: #212121;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 800;
  position: fixed;
  bottom: 50px;
  right: 16px;
  text-align: center;
  border: none;
  border-radius: 50px;
  vertical-align: middle;
`;
export default Button;
