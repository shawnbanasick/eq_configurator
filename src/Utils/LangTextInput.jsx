import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import appState from "../GlobalState/appState";

// const clone = require("rfdc")();

const LangTextInput = (props) => {
  // props = label, stateId, sectionName, width, left
  const { t } = useTranslation();

  let backgroundCol = "white";

  const key = `${props.stateId}`; // ${props.sectionName}

  const handleChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    appState[key] = value;
    if (value.length === 0) {
      backgroundCol = "pink";
      console.log("length is zero");
    }
    console.log(value.length);
  };

  return (
    <InputContainerDiv>
      <TitleSpan>{`${t(props.label)} `}</TitleSpan>
      <UserText
        tabindex="0"
        type="text"
        placeholder={props.placeholder}
        width={props.width}
        left={props.left}
        name={props.name}
        value={appState[key] || ""}
        onChange={handleChange}
        className="optionsInput"
        backCol={backgroundCol}
      />
    </InputContainerDiv>
  );
};

export default view(LangTextInput);

const UserText = styled.input((props) => ({
  width: `${props.width}vw`,
  marginLeft: `${props.left}px`,
  paddingLeft: `10px`,
  backgroundColor: `${props.backCol}`,
}));

const InputContainerDiv = styled.div`
  display: flex;
  margin-top: 25px;
  margin-left: 70px;
  width: 800px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const TitleSpan = styled.span`
  margin-right: 10px;
  /* width: auto; */
`;
