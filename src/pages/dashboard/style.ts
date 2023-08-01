import styled from "styled-components";

export const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 14px;
  

  .border{
    border-bottom: 1px solid var(--color-gray-2);
  } 
  .header{
    padding-top: 15px;
    border-bottom: 1px solid var(--color-gray-2);
  }
  
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    color: var(--color-gray-0);
    width: 100%;
    max-width: 1000px;

    h2 {
      color: var(--color-blue-1);
      font-size: 1.1rem;
    }

    h3 {
      font-size: 1rem;
    }

    button {
      height: 28px;
      width: 60px;
      background-color: var(--color-gray-3);
      color: white;
      border-radius: 4px;
      font-size: 0.7rem;
    }
  }

  .perfil {
    padding: 0;
    
    h4 {
      font-size: 0.8rem;
      color: var(--color-gray-1);
    }
    .info {
      border-bottom: none;
      flex-direction: column;
      align-items: flex-start;
    }

    .userBtn {
      border-bottom: none;
      flex-direction: column;
      align-items: flex-end;
    }

    .userUpd {
      background-color: #ff8d07;
    }
    .userDel {
      background-color: #a00600;
      margin-top: 8px;
    }
  }

  .contacts {
    border-bottom: none;
    padding-bottom: 0;
    button {
      background-color: green;
    }
  }

  .list{
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap:10px
  }

  

  
  @media (min-width: 769px) {
    margin: 0 auto;
    align-items: center;
    display: block;
    
    .list{
      flex-direction: row;
      flex-wrap: wrap;
      

    }
    
    .perfil {
      flex-direction: row;
      h4 {
        margin-top: 0px;
      }
    }
    .warning {
      display: block;
    }

    @media (min-width: 1025px) {
      div {
        max-width: 1400px;
        padding: 20px 200px;
      }
      .list{
        max-width: 1400px;
        padding: 0px 200px;
      }
    }
   
  }
`;
