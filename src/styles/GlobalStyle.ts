import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  #root{
    height: 100%;
  }
  :root {
    --base-green: rgba(11, 82, 83, 1);
    --light-green: rgba(25, 130, 138, 1);
    --gray: rgba(217, 217, 217, 1);
    --dark-gray: rgba(185, 178, 178, 1);
    --red: rgba(239, 87, 80, 1);
    --yellow: rgba(244, 153, 25, 1);
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  body{
    font-family: 'Poppins', sans-serif;
    cursor: default;
    background-color: var(--light-green);
  }

  .info{
    font-size: 0.8rem;

    color: var(--dark-gray);
  }

  input{
    outline: none;
  }

  button{
    cursor: pointer;

    :hover{
      filter: brightness(95%);
    }
  }
`;

export default GlobalStyle;
