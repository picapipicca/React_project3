import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { text, _onClick, color, bgcolor, is_float } = props;
  const styles = { color: color, bgcolor: bgcolor };

  if (is_float) {
    return (
      <React.Fragment>
        <FloatButton onClick={_onClick}>{text}</FloatButton>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <ButtonTag {...styles} onClick={_onClick}>
        {text}
      </ButtonTag>
    </React.Fragment>
  );
};
Button.defaultProps = {
  color: "#212121",
  bgcolor: false,
  text: "버튼입니다!",
  _onClick: () => {},
  is_float: false,
};

const ButtonTag = styled.button`
  width: 100%;
  background-color: #d9edd8;
  ${(props) => (props.bgcolor ? `background-color : ${props.bgcolor}` : "")};
  color: ${(props) => props.color};
  padding: 12px 0px;
  box-sizing: border-box;
  border: none;
`;

const FloatButton = styled.button`
  width : 50px;
  height : 50px;
  background-color: #d9e62e;
  color: #212121;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 800;
  position: fixed;
  bottom: 50px;
  right: 16px;
  text-align: center;
  border: none;
  border-radius :50px;
  vertical-align : middle;
`;
export default Button;
