import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import appState from "../GlobalState/appState";

// const clone = require("rfdc")();

const UserTextInput = (props) => {
  // props = label, stateId, sectionName, width, left
  const { t } = useTranslation();

  const newMemoryKey = `inputColor${props.stateId}`;
  let backgroundCol = appState[newMemoryKey] || "white";

  const key = `${props.stateId}`; // ${props.sectionName}

  const handleChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    appState[key] = value;
    if (value.trim().length === 0) {
      appState[newMemoryKey] = "lightpink";
    } else {
      appState[newMemoryKey] = "white";
    }
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

export default view(UserTextInput);

const UserText = styled.input`
  box-sizing: border-box;
  width: ${(props) => props.width}vw;
  margin-left: ${(props) => props.left}px;
  padding-left: 10px;
  background-color: ${(props) => props.backCol};
  border: 1px solid rgb(118, 118, 118);
  border-radius: 2px;
  &:focus {
    outline: none !important;
    border: 3px solid var(--second-theme-color);
    box-shadow: 0 0 5px var(--second-theme-color);
  }
`;

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
