import styled from "styled-components";

const StyleDivResult = styled.div`

  width: 50%;
  height: 100%;

  padding-left: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;

  h3{
    font-size: 1.5rem;

    margin-bottom: 50px;

    color: var(--base-green);
  }

  .cont-results{
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    box-sizing: border-box;

    .empty{
      text-align: center;

      color: var(--dark-gray);
    }

    .timeout{
      text-align: center;

      color: var(--yellow);
    }

    .internal-error{
      text-align: center;

      color: var(--red);
    }

    .cont-loading{
      width: 100%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      img{
        width: 40px;
      }
    }

    .cont-results{
      width: 100%;
      min-height: 50px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      span{
        color: var(--light-green);

        strong{
          font-weight: bold;
        }
      }
    }
  }
`;

export default StyleDivResult;