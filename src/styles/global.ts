import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    border: 0;
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    scroll-behavior: smooth;
  }

  :root {
    // Primary Palette
    --color-primary: rgb(255, 87, 127);
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;
    --color-primary-01: rgba(255, 87, 127, 0.1);

    // Grey Scale Palette
    --grey-0: #F8F9FA;
    --grey-1: #868E96;
    --grey-2: #343B41;
    --grey-3: #212529;
    --grey-4: #121214;
    --grey-hover: #646C75;

    // Shadow
		--shadow-0: rgba(0, 0, 0, 0.4);
    --shadow-1: rgba(0, 0, 0, 0.5);

    // Transparent
    --transparent: transparent;

    // Red
    --red: rgb(217,48,37);

    // Border Radius
    --border-radius: 2px;
  }

  body {
    color: var(--grey-0);
    background-color: var(--grey-4);
  }

  button, a, select {
    cursor: pointer;
    transition: 0.5s;
  }

  a {
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--grey-4);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0.5px;
    background-color: var(--grey-2);
  }

  ::selection {
    background-color: var(--color-primary-01);
  }
`;
