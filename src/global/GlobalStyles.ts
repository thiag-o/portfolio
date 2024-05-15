import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  &::selection{
    background-color: ${({ theme }) => theme.colors.primary}A6;
   
  }
}

ul,
p,
h1,
h2,
h3,
h4,
h5,
blockquote,
body {
  margin: 0;
  padding: 0;
}

.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1566px;
}


@media (max-width: 1566px) {
  .container {
    max-width: 1200px;
  }
}
@media (max-width: 576px) {
  .container {
    padding-right: 10px;
    padding-left: 10px;
  }
}

`;
