import styled from "styled-components";

export const StyledConfirmDelete = styled.section`
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #212529;
  border-radius: 4px;
  padding: 0 20px;
  margin: auto;
 

  h3 {
    align-self: center;
    color: var(--color-gray-0);
    font-size: 0.85rem;
    margin-top: 10px;
    align-items: center;
  }
  h4{
    font-size: 0.85rem;
  }

  

    .header{
      border-bottom: 1px solid var(--color-gray-2);
      padding: 0;
      align-items: center;
      
    }
    span {
      cursor: pointer;
    }
  

  .btnForm {
    width: 100%;
    color: white;
    text-align: center;
    font-size: 1rem;
    justify-content: space-between;

    .confirm{
        background-color: #a00600;
    }
    .cancel{
        background-color: var(--color-gray-2);
    }

    
  }
  @media (min-width: 1025px) {
      .btnForm{
        padding: 20px 0;
      }
    }
`;
