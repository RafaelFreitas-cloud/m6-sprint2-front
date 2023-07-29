import styled from "styled-components";

export const StyledSearchInput = styled.form`
  width: 340px;
  height: 60px;
  border: 1px solid rgba(224, 224, 224, 1);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: white;

  button {
    width: 107px;
    height: 40px;
    border-radius: 8px;
    background-color: var(--color-green-1);
    color: rgba(255, 255, 255, 1);
  }

  input {
    font-size: 16px;
    color: var(--color-gray-20);
    padding-left: 10px;
  }

  input::placeholder {
    font-size: 16px;
    color: var(--color-gray-20);
  
  }

  @media (max-width: 321px) {
    width: 290px;
    input {
      width: 170px;
    }
    button {
    width: 90px;
  }
  }
`;
