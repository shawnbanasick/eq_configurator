import { createGlobalStyle } from 'styled-components';
import ContrailOne from './ContrailOne-Regular.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Contrail';
    src: url(${ContrailOne}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
  }
  h1 {
    font-family: 'Contrail';
  }
`;

export default GlobalStyle;