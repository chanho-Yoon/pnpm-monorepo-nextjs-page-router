import { css } from '@emotion/react';
import resetCSS from '@assets/styles/resetCSS';

const baseCSS = css`
  * {
    box-sizing: border-box; !important;
  }
  html {
    -webkit-tap-highlight-color: transparent;
  }

  html, body, #__next {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: 'Spoqa Han Sans Neo', sans-serif;
    font-size: 16px;
  }

  ${resetCSS}
`;

export default baseCSS;
