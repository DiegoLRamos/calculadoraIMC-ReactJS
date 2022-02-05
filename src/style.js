import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 90vh;
  padding: 25px 0;

  color: ${({ theme }) => theme.colorFont};

  h1{
    padding: 20px;
    text-align: center;
    text-transform: uppercase;
  }

  p{
    font-size: 1.3rem;
    margin-top: 20px;
    text-align: center;
  }

  span{
    margin: 12px 0;
  }

  @media only screen and (min-width: 450px){
    width: 80vw;
    height: 100%;
    padding: 30px;

    max-width: 560px;
    border-radius: 10px;

    background-color: ${({ theme }) => theme.bgcContainer};
    box-shadow: 0px 0px 10px 1px ${({ theme }) => theme.borderContainer};    
  }
`;


export const AreaInputs = styled.div`
  display: flex;
  flex-direction: column;

  width: 90%;
`;


export const BtnCalculate = styled.button`
  height: 46px;
  
  text-transform: uppercase;
  font-size: 1.12rem;
  font-weight: bold;

  border: 0;
  border-radius: 6px;

  background-color: #41D3BE;
  color: #FAFAFA;

  &:hover{
    opacity: 0.7;
  }
`;


export const BtnTheme = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;

  border: none;
  background: transparent;

  img {
    width: 25px;
    height: 25px;
  }
`;