import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Inter' sans-serif;
    scroll-behavior: smooth;
  }

  :root {
    // Primary Palette
    --color-primary: #ff577f;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;

    // Grey Scale Palette
    --grey-0: #F8F9FA;
    --grey-1: #868E96;
    --grey-2: #343B41;
    --grey-3: #212529;
    --grey-4: #121214;

    // Feedback Palette
    --sucess: #3FE864;
    --negative: #E83F5B;

    // Shadow
		--shadow-0: rgba(0, 0, 0, 0.4);
  }

  body {
    background-color: var(--grey-4);
    color: var(--grey-0);
  }

  button, a {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
