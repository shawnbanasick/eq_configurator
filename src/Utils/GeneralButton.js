import styled from "styled-components";

const GeneralButton = styled.div`
  /* display: flex;
  align-items: center;
  align-self: center;
  justify-items: center; */
  text-align: center;
  box-shadow: none;
  box-sizing: content-box;
  min-height: 28px;
  min-width: 50px;
  height: auto;
  width: auto;
  font-size: 16px;
  font-family: Helvetica, sans-serif;
  font-weight: normal;
  border: none;
  border-radius: 4px;
  margin-right: 3px;
  margin-bottom: 3px;
  /* padding: 5px; */
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
  background: #d6dbe0;
  text-decoration: none;
  color: black;
  transition: all 0.5s ease;
  transition-duration: 0.3s;
  transition-property: box-shadow;
  transform: translateZ(0);
  box-shadow: inset 0 0 0 4px
      ${(props) => (props.isActive ? "var(--main-theme-color)" : "#d6dbe0")},
    0 0 1px 0.6;
  background-color: ${(props) =>
    props.isActive ? "var(--main-theme-color)" : "#d6dbe0"};

  box-shadow: ${(props) =>
    props.isActive
      ? "inset 0 0 0 2px #666, 0 0 1px transparent"
      : "inset 0 0 0 0px #666, 0 0 0px transparent"};

  &:hover {
    box-shadow: inset 0 0 0 4px #666, 0 0 1px transparent;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.7;
  }
`;

export default GeneralButton;
