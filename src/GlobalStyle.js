import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
  }

  body{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
    height: 100vh;
    width: 100vw;

    background-color: ${ ({theme}) => theme.body };
  }

  button{
    cursor: pointer;
  }
`;