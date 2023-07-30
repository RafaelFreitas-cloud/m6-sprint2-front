import styled from "styled-components";

export const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 14px;

  h2 {
    color: var(--color-blue-1);
    font-size: 2rem;
  }

  form {
    margin-top: 40px;
    padding: 50px 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #212529;
    border-radius: 4px;

    h3 {
      align-self: center;
      color: var(--color-gray-0);
      font-size: 1.2rem;
    }

    label {
      color: var(--color-gray-0);
      font-size: 0.7rem;
      margin: 10px 0;
    }

    input {
      width: 100%;
      background-color: var(--color-gray-2);
      color: rgba(134, 142, 150, 1);
      border-radius: 4px;
      height: 40px;
      padding: 0 10px;
      font-size: 0.95rem;
    }

    input::placeholder {
      color: rgba(134, 142, 150, 1);
      font-size: 0.85rem;
    }

    div {
      display: flex;
      align-items: center;
      background-color: var(--color-gray-2);
      border-radius: 4px;
      padding-right: 10px;
      

      .eye {
        cursor: pointer;
        color: var(--color-gray-1);
      }
    }

    button {
      width: 100%;
      background-color: var(--color-blue-1);
      border-radius: 4px;
      color: white;
      margin-top: 20px;
      height: 40px;
      text-align: center;
      font-size: 1rem;
    }

    p {
      align-self: center;
      color: var(--color-gray-1);
      font-size: 0.8rem;
      margin-top: 20px;
      text-align: center;
    }

    .register {
      background-color: var(--color-gray-1);
    }
  }

  @media (min-width: 500px) {
    form {
      max-width: 400px;
    }
  }

  
`;
