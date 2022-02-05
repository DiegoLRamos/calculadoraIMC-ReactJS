import styled from "styled-components";

export const Input = styled.input`
  height: 46px;
  margin-bottom: 12px;
  padding: 0 12px;

  background-color: ${({ theme }) => theme.bgcInput};
  color: ${({ theme }) => theme.colorFont};

  border: 0;
  border-radius: 6px;

  font-size: 1rem;

  &::placeholder{
    color: gray;
  }

`;
