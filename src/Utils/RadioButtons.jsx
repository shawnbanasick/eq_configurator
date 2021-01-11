import React from "react";
import styled from "styled-components";
import { view } from "@risingstack/react-easy-state";
import GeneralButton from "../Utils//GeneralButton";
import { useTranslation } from "react-i18next";
import appState from '../GlobalState/appState';
// import horstDispatcher from "./centroidLogic/horst55Logic/horstDispatcher";
// import centroidDispatch from "./centroidLogic/centroidDispatch";
// import appState from "../GlobalState/appState";
// import rotationState from "../GlobalState/rotationState";

const SelectionButtons = (props) => {
    // props = label, buttonIdArray=[], stateId, sectionName


const clearAllButtons = () => {
    console.log(JSON.stringify(props))
    const array = props.buttonIdArray;
    array.forEach(element => {
        let key = `${props.sectionName}${props.stateId}${element}Active`;     
        appState[key] = false;
    });
};



    console.log(JSON.stringify(props))

  const { t } = useTranslation();

  const handleOnclick = event => {
    clearAllButtons();
    const value = event.target.value;
    const buttonActiveState = event.target.id;
   appState[buttonActiveState] = true;
   console.log(value, buttonActiveState);
    // factorState[factor] = true;
    // factorState.numCentroidFactors = value;
  };

//   const handleExtraction = () => {
//   };


//   const buttonIdArray = [1, 2, 3, 4, 5, 6, 7, 8];
  
    return (
      <ButtonsContainerDiv>
        <TitleSpan>{`${t(props.label)}: `}</TitleSpan>
        {props.buttonIdArray.map(item => (
          <SelcButtons
            as={GeneralButton}
            key={`buttonSelect${item}`}
            value={item}
            isActive={appState[`${props.sectionName}${props.stateId}${item}Active`]}
            // disabled={isRadioSelectDisabled}
            onClick={handleOnclick}
            id={`${props.sectionName}${props.stateId}${item}Active`}
          >
            {item}
          </SelcButtons>
        ))}
        {/* <ExtractFactorsButton
          onClick={handleExtraction}
          disabled={isCentroidFacSelectDisabled}
        >{`${t("Extract")}`}</ExtractFactorsButton> */}
      </ButtonsContainerDiv>
    );
 
};

export default view(SelectionButtons);

const ButtonsContainerDiv = styled.div`
  display: flex;
  margin-top: 25px;
  margin-left: 70px;
  width: 800px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const SelcButtons = styled.div`
  min-width: 50px;
  height: 15px;
`;

const TitleSpan = styled.span`
  margin-right: 10px;
`;

// const ExtractFactorsButton = styled(GeneralButton)``;
