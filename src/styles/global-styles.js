import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  img{
    display: block;
    max-width: 100%;
  }
  
  body{
    background-color: #000;
    color: #fff;
    font-family: sans-serif;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }

  input {
    padding: .5rem 2rem;
    margin-top: 1.5rem;
    margin-bottom: .6rem;
    width: 100%;
    /* height: 30px; */
    border-radius: 5px;
    border-style: none;
    outline: none;
    background-color: #FFF;
  }

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: #FFF;
  }

  button:hover {
    color: #0F0;
  }


`;
