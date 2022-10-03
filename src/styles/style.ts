import styled from "styled-components";

export const StyleDivApp = styled.div`
  width: 100%;
  height: 100%;

  main{
    width: 100%;
    
    margin-top: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    .cont-main{
      max-width: 800px;
      min-width: 300px;
      width: 100%;

      margin-bottom: 50px;
      padding: 10px 15px;

      background-color: white;

      border: 2px solid var(--base-green);
      border-radius: 15px;

      display: flex;
      justify-content: space-between;

      box-sizing: border-box;
    }
  }
`