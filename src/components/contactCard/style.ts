import styled from "styled-components";

export const StyledContactCard = styled.li`
display: flex;
flex-direction: column;
width: 100%;
padding: 5px 10px;
background-color: var(--color-gray-3);
border-radius: 10px;
margin: 0 auto;


h4 {
      font-size: 1rem;
      color: var(--color-gray-1);
    }
h3 {
      font-size: 1.2rem;
      color: #dcdcdc;
    }

.btn{
    border-bottom:none;
    padding: 5px 0;
    color: var(--color-gray-0);

    button {
      height: 28px;
      width: 60px;
      background-color: var(--color-gray-3);
      color: white;
      border-radius: 4px;
      font-size: 0.7rem;
    }

    .upd {
      background-color: #ff8d07;
    }
    .del {
      background-color: #a00600;
      margin-top: 8px;
    }



}

@media (min-width: 726px) {
    max-width: 320px;
    
   
  }

`