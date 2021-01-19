import React from "react";
import { view } from "@risingstack/react-easy-state";
import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import GeneralButton from "../../Utils/GeneralButton";
import appState from "../../GlobalState/appState";

const clone = require("rfdc/default");

const SurveyItemDndList = () => {
  const grid = 5;
  let testItems = clone(appState.surveyQuestionsArray);

  const getItemStyle = (isDragging, draggableStyle) => ({
    // drag container style
    flexDirection: "row",
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
    borderRadius: "15px",

    // change background colour if dragging
    background: isDragging ? "#e6bbad" : "#d6dbe0",

    // styles we need to apply on draggables
    ...draggableStyle,
  });

  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "lightgrey" : "lightblue",
    padding: grid,
    width: "78vw",
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
    // console.log(JSON.stringify(testItems));
  };

  const callDelete = (e) => {
    const item = e.target.value;
    testItems.splice(item, 1);
    console.log(JSON.stringify(testItems, null, 2));
    appState.surveyQuestionsArray = testItems;
  };

  return (
    <DragAndDropContainer>
      <h2 style={{ marginBottom: 5, marginTop: 5 }}>Question List:</h2>
      <DragDropContext style={{ display: "flex" }} onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {testItems.map((item, index) => (
                <Draggable
                  key={item.id}
                  data-id={item.id}
                  draggableId={item.id}
                  index={index}
                >
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
                      <ul>
                        {item.content.map((item) => (
                          <li style={{ width: "50vw" }} key={item}>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <DeleteButton value={index} onClick={callDelete}>
                        Delete
                      </DeleteButton>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </DragAndDropContainer>
  );
};

export default view(SurveyItemDndList);

const DragAndDropContainer = styled.div`
  overflow: auto;
`;

const DeleteButton = styled(GeneralButton)`
  align-self: flex-end;
  margin-left: 64vw;
  height: 20px !important;
  background: #b2b2b2;
`;
