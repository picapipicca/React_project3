import React from "react";
import styled from "styled-components";

import { Text, Grid } from "../elements";

const Input = (props) => {
  const { multiLine, label, placeholder, _onChange, type , value} = props;

  if (multiLine) {
    return (
      <Grid>
        {label && <Text margin="0px">{label}</Text>} 
        <TextareaTag
          rows = {8}
          value={value}
          placeholder={placeholder}
          onChange={_onChange}
        ></TextareaTag>
      </Grid>
    );
  }

  return (
    <React.Fragment>
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        <InputTag type={type} placeholder={placeholder} onChange={_onChange} />
      </Grid>
    </React.Fragment>
  );
};
Input.defaultProps = {
  multiLine: false,
  label: false,
  placeholder: "텍스트를 입력해주세요.",
  type: "text",
  value :"",
  _onChange: () => {},
};
const TextareaTag = styled.textarea`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

const InputTag = styled.input`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

export default Input;
