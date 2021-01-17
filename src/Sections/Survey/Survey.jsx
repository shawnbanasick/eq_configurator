import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled, { keyframes } from "styled-components";
import GlobalStyle from "../../Utils/GlobalStyle";
import UserDropdown from "./UserDropdown";
import appState from "../../GlobalState/appState";
import RadioButtons from "../../Utils/RadioButtons";
import UserTextInput from "../../Utils/UserTextInput";
import TextImage from "./textQuestion";
import TextAreaImage from "./textAreaQuestion";
import RadioImage from "./radioQuestion";
import Scale2Image from "./scale2Question";
import Scale5Image from "./scale5Question";
import Scale10Image from "./scale10Question";
import CheckboxImage from "./checkboxQuestion";
import SelectImage from "./selectQuestion";
import InformationImage from "./informationQuestion";
import shouldDisplayObject from "./shouldDisplayObject";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const defaultArray = [
  "required (true/false): true",
  "label text: Age",
  "note: Please enter your year of birth (YYYY, eg. 1980).",
  "maxlength: 4",
  `restricted: "0-9"`,
];

const grid = 8;
let testItems = [
  { id: "item-0", content: "item 0" },
  { id: "item-1", content: "item 1" },
  { id: "item-2", content: "item 2" },
];

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250,
});

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const onDragEnd = (result) => {
  // dropped outside the list
  if (!result.destination) {
    return;
  }

  const items = reorder(
    testItems,
    result.source.index,
    result.destination.index
  );

  testItems = [...items];
  console.log(JSON.stringify(testItems));
};

const Survey = () => {
  let showSurvey = appState.config8ShowStep5;

  let detailsArray = appState.detailsArray || defaultArray;

  let showSurveytextImage = appState.showSurveytextImage;
  let showSurveytextareaImage = appState.showSurveytextareaImage;
  let showSurveyradioImage = appState.showSurveyradioImage;
  let showSurveyselectImage = appState.showSurveyselectImage;
  let showSurveycheckboxImage = appState.showSurveycheckboxImage;
  let showSurveyrating2Image = appState.showSurveyrating2Image;
  let showSurveyrating5Image = appState.showSurveyrating5Image;
  let showSurveyrating10Image = appState.showSurveyrating10Image;
  let showSurveyinformationImage = appState.showSurveyinformationImage;

  // for development only
  showSurvey = true;

  const surveyQuestionType = appState.surveyQuestionType;
  const displayBoolean2 = shouldDisplayObject();
  console.log(surveyQuestionType);
  const displayBoolean = displayBoolean2[surveyQuestionType];
  console.log(displayBoolean);

  return (
    <MainContent>
      <GlobalStyle />
      <Title>Survey Generator</Title>
      {/* {showSurvey === "true" && ( */}
      <SurveyContainer>
        <ImageContainer>
          <p>
            <strong>Example:</strong>
          </p>
          {showSurveytextImage && <TextImage />}
          {showSurveytextareaImage && <TextAreaImage />}
          {showSurveyradioImage && <RadioImage />}
          {showSurveyselectImage && <SelectImage />}
          {showSurveycheckboxImage && <CheckboxImage />}
          {showSurveyrating2Image && <Scale2Image />}
          {showSurveyrating5Image && <Scale5Image />}
          {showSurveyrating10Image && <Scale10Image />}
          {showSurveyinformationImage && <InformationImage />}
          <p>
            <strong>Settings:</strong>
          </p>
          {detailsArray && (
            <ul>
              {detailsArray.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </ImageContainer>
        <SettingsContainer>
          <h2 style={{ marginBottom: 5, marginTop: 5 }}>New Item Settings:</h2>
          <UserDropdown />
          {displayBoolean.required && (
            <RadioButtons
              label="Answer required:"
              buttonIdArray={["true", "false"]}
              stateId="surveyAnswerRequired"
              sectionName="survey"
            />
          )}
          {displayBoolean.label && (
            <UserTextInput
              label="Label:"
              stateId="surveyQuestionLabel"
              sectionName="survey"
              width={50}
              left={0}
            />
          )}
          {displayBoolean.note && (
            <UserTextInput
              label="Question note:"
              stateId="surveyQuestionNote"
              sectionName="survey"
              width={40}
              left={0}
            />
          )}
          {displayBoolean.maxlength && (
            <RadioButtons
              label="Limit answer length:"
              buttonIdArray={["true", "false"]}
              stateId="surveyAnswerLenIsLimited"
              sectionName="survey"
            />
          )}
          {displayBoolean.maxlength && (
            <UserTextInput
              label="Answer maximum length:"
              stateId="6bsurveyAnswerLenMax"
              sectionName="survey"
              width={5}
              left={0}
            />
          )}
          {displayBoolean.restricted && (
            <RadioButtons
              label="Answer restricted to numbers (0-9):"
              buttonIdArray={["true", "false"]}
              stateId="surveyAnswerRestricted"
              sectionName="survey"
            />
          )}
          {displayBoolean.scale && (
            <UserTextInput
              label="Scale:"
              stateId="surveyQuestionScale"
              sectionName="survey"
              width={65}
              left={0}
            />
          )}
          {displayBoolean.bg && (
            <RadioButtons
              label="Display background:"
              buttonIdArray={["true", "false"]}
              stateId="surveyBackgroundDisplay"
              sectionName="survey"
            />
          )}
          {displayBoolean.options && (
            <UserTextInput
              label="Options:"
              stateId="surveyQuestionOptions"
              sectionName="survey"
              width={65}
              left={0}
            />
          )}
        </SettingsContainer>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                {testItems.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        {item.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </SurveyContainer>
      {/* )} */}
    </MainContent>
  );
};

export default view(Survey);

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const MainContent = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  /* grid-template-columns: 1fr;
  grid-template-rows: 150px 130px 20px 350px 200px 1fr;
  grid-template-areas:
    "title"
    "options"
    "row3"
    "row4"
    "row5"
    "row6"; */
  justify-items: left;
  align-items: left;
  background-color: white;
  visibility: ${(props) => (props.view ? "hidden" : "visible")};
  animation: ${(props) => (props.view ? fadeOut : fadeIn)} 0.5s linear;
  transition: visibility 0.5s linear;
  font-family: Helvetica, sans-serif;
  font-size: 18px;
  width: 100%; // calc(100vw - 160px);
  box-sizing: border-box;
  max-height: calc(100vh - 23px);
  padding-left: 50px;
  padding-right: 50px;
  overflow: auto;
  user-select: none;
  /* border: 2px solid red; */
`;

const Title = styled.h1`
  display: grid;
  grid-area: row1;
  font-size: 50px;
  width: 70vw;
  align-items: center;
  justify-content: center;
`;

const SurveyContainer = styled.div`
  margin-bottom: 25px;
  width: 80vw;
  /* border: 2px solid green; */
`;

const ImageContainer = styled.div`
  border: 3px solid black;
  background: #cde7f0;
  margin-top: 20px;
  margin-bottom: 0px;
  padding-left: 10px;
  width: 100%;
  height: 420px;
  transition: opacity 3s ease-in-out;
`;

const SettingsContainer = styled.div`
  border: 3px solid black;
  margin-top: 0px;
  margin-bottom: 5px;
  padding-left: 10px;
  width: 100%;
  height: 440px;
  transition: opacity 3s ease-in-out;
`;
