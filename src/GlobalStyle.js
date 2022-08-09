import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  :root {
    --Moderate-cyan: hsl(176, 50%, 47%);
    --Dark-cyan: hsl(176, 72%, 28%);
    --Black: hsl(0, 0%, 0%);
    --Dark-gray: hsl(0, 0%, 48%);
    --White: hsl(0, 0%, 100%);

    --font: "Commissioner", sans-serif;
  }

  * {
    box-sizing: border-box;
    font-family: var(--font);
  }

  body {
    background-color: hsl(0, 0%, 96%);
    margin: 0;
  }
`;

export default GlobalStyle;
