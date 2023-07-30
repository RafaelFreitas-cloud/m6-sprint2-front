import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   :root {
    --color-blue-3: #0d47a1;
    --color-blue-2: #1565c0;
    --color-blue-1: #1976d2;
    --color-blue-600: #1e88e5;
    --color-blue-500: #2196f3;
    --color-blue-400: #42a5f5;
    --color-blue-300: #64b5f6;
    --color-blue-200: #90caf9;
    --color-blue-100: #bbdefb;
    --color-gray-0: #f8f9fa;
    --color-gray-1: #868e96;
    --color-gray-2: #343b41;
    --color-gray-3: #212529;
    --color-gray-4: #121214;

       
  }

  /* font-size: 16px;
  1rem = 10px
  */

  /* @media (min-width: 700px) {
    :root {
      font-size: 62.5%; // root font-size: 10px;
    }
  } */
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  body,html{
    width: 100vw;
    height: 100vh;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: var(--color-gray-4);
    color: var(--color-gray-300);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: 'Inter';
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;