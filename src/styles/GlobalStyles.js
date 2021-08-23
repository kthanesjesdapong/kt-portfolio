import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
:root{
  --dark-bg: #15202B;
  --gray-1: #BEBEBE;
  --deep-blue: #1d2d3c;
  --white : white;
  --black: black;
}

//dark-bg for background;
//gray-1 for most of text that appears on mani
html{
  font-size: 10px;
  font-family: 'SF-Regular';
  background-color: var(--dark-bg);
  scroll-behavior: smooth;
}
ul,li{
  list-style: none;
}
a{
  text-decoration: none;
}
img, svg{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
button{
  outline: none
}
.container {
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
}
/* Smooth Scroll  */
[data-scrollbar] {
  height: 100vh;
  overflow: hidden;
  background-color: var(--gray-1);
  .scroll-content {
    background-color: var(--dark-bg);
  }
  .scrollbar-track.scrollbar-track-y {
    background: var(--deep-blue);
    .scrollbar-thumb-y {
      background: var(--gray-1);
    }
  }
}

`;
export default GlobalStyles;
