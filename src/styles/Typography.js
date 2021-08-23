import { createGlobalStyle } from 'styled-components';
import SFRegular from '../assets/fonts/SF-Regular.ttf';
import SFBold from '../assets/fonts/SF-Bold.ttf';
import SFSemibold from '../assets/fonts/SF-Semibold.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'SF-Regular';
    src: url(${SFRegular});
    font-style: normal;
  }
  @font-face {
    font-family: 'SF-Semibold';
    src: url(${SFSemibold});
    font-style: normal;
  }
  @font-face {
    font-family: 'SF-Bold';
    src: url(${SFBold});
    font-style: normal;
  }
  html{
    font-family: 'SF-Regular';
    color: var(--gray-1);
  }
  *{
    font-family: 'SF-Regular';
    color: var(--gray-1);
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'SF-Semibold'
  }
`;

export default Typography;
