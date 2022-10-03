import styled, { css } from 'styled-components';
import { IPropsInput } from '../../interfaces';

export const StyleDivForm = styled.div<IPropsInput>`
  width: 50%;

  padding-right: 10px;

  border-right: 1px solid var(--base-green);

  box-sizing: border-box;

  form {
    min-height: 550px;
    height: 550px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-size: 1.5rem;

      margin-bottom: 10px;

      color: var(--base-green);
    }

    .div-inputs {
      width: 100%;
      height: 100px;

      padding-top: 5px;

      border-top: 1px solid var(--gray);

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      box-sizing: border-box;

      .input-errors {
        width: 100%;
        height: 20px;

        .error {
          font-size: 0.8rem;

          color: var(--red);
        }
      }

      input{
        height: 22px;

        padding-left: 8px;

        border: 1px solid var(--base-green);
        border-radius: 15px;

        ::placeholder{
          color: var(--dark-gray);
        }
      }
    }

    .buttons{
      width: 100%;
      height: 60px;

      margin-top: 20px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      button{
        height: 25px;

        background-color: var(--gray);

        border: none;
        border-radius: 15px;

        :first-child{
          background-color: var(--light-green);
          color: white;
        }
      }
    }
  }

  ${(props) =>
    props.isErrored.amount &&
    css`
      label[for='amount'] {
        color: var(--red);
      }

      #amount {
        border-color: var(--red);
      }
    `}

  ${(props) =>
    props.isErrored.installments &&
    css`
      label[for='installments'] {
        color: var(--red);
      }

      #installments {
        border-color: var(--red);
      }
    `}

  ${(props) =>
    props.isErrored.mdr &&
    css`
      label[for='mdr'] {
        color: var(--red);
      }

      #mdr {
        border-color: var(--red);
      }
    `}

  ${(props) =>
    props.isErrored.days &&
    css`
      label[for='days'] {
        color: var(--red);
      }

      #days {
        border-color: var(--red);
      }
    `}
`;
