import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaForm } from '../../schemas';
import { IDataRequest, IForm, IResult } from '../../interfaces';
import {
  apiCreateAnticipation,
  apiSimulateDelay,
  apiSimulateTimeout,
  apiSimulateInternalError,
} from '../../services';
import { useContext, useEffect, useState } from 'react';
import { AmountResultContext } from '../../Providers/AmountResultProvider';
import { StyleDivForm } from './style';
import { AmountResultStatusContext } from '../../Providers/AmountStatusProvider';
import { IsLoadingContext } from '../../Providers/IsLoadingProvider';
import { IsRequestedContext } from '../../Providers/IsRequestedProvider';

const Form = () => {
  const { setAmount } = useContext(AmountResultContext);
  const { setStatus } = useContext(AmountResultStatusContext);
  const { setIsLoading } = useContext(IsLoadingContext);
  const { setIsRequested } = useContext(IsRequestedContext);

  // const [dataRequest, setDataRequest] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    resolver: yupResolver(schemaForm),
  });

  const onSubmit = (data: IForm) => {
    setIsLoading(true);
    setIsRequested(true);

    const { amount, installments, mdr, days } = data;

    // setDataRequest({
    //   amount: amount,
    //   installments: installments,
    //   mdr: mdr,
    // });

    // console.log(dataRequest);

    // if (days) {
    //   const splitedDays = data.days.split(',');

    //   const lastValue = splitedDays[splitedDays.length - 1];

    //   if (lastValue === '') splitedDays.pop();

    //   setDataRequest({
    //     amount,
    //     installments,
    //     mdr,
    //     days: splitedDays,
    //   });
    // }

    let dataRequest: IDataRequest = {
      amount,
      installments,
      mdr,
    };

    if (days) {
      const splitedDays = data.days.split(',');

      const lastValue = splitedDays[splitedDays.length - 1];

      if (lastValue === '') splitedDays.pop();

      dataRequest = {
        amount,
        installments,
        mdr,
        days: splitedDays,
      };
    }

    apiSimulateDelay
      .post('', JSON.stringify(dataRequest))
      .then((res) =>
        handleSuccessCreate({ data: { ...res.data }, status: res.status })
      )
      .catch((err) => handleErrorCreate(err.response.status));
  };

  const handleSuccessCreate = (res: IResult) => {
    setAmount(res.data);
    setStatus(res.status);
    setIsLoading(false);
  };

  const handleErrorCreate = (numberError: number) => {
    setStatus(numberError);
    setIsLoading(false);
  };

  const tratedErrors = {
    amount: errors.amount?.message,
    installments: errors.installments?.message,
    mdr: errors.mdr?.message,
    days: errors.days?.message,
  };

  return (
    <StyleDivForm isErrored={tratedErrors}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Simule sua Antecipação</h2>

        <div className='div-inputs exception'>
          <div className='input-errors'>
            {!!errors.amount?.message && (
              <span className='error'>{errors.amount.message}</span>
            )}
          </div>
          <label htmlFor='amount'>* Informe o valor:</label>
          <input
            type='number'
            id='amount'
            {...register('amount')}
            placeholder='Ex: 1000'
          />
        </div>

        <div className='div-inputs'>
          <div className='input-errors'>
            {!!errors.installments?.message && (
              <span className='error'>{errors.installments.message}</span>
            )}
          </div>
          <label htmlFor='installments'>* Informe as parcelas:</label>
          <input
            type='number'
            id='installments'
            {...register('installments')}
            placeholder='Ex: 10'
          />
          <span className='info'>Máximo de 12 parcelas.</span>
        </div>

        <div className='div-inputs'>
          <div className='input-errors'>
            {!!errors.mdr?.message && (
              <span className='error'>{errors.mdr.message}</span>
            )}
          </div>
          <label htmlFor='mdr'>* Informe o percentual de MDR:</label>
          <input
            type='number'
            id='mdr'
            {...register('mdr')}
            placeholder='Ex: 5'
          />
        </div>

        <div className='div-inputs'>
          <div className='input-errors'>
            {!!errors.days?.message && (
              <span className='error'>{errors.days.message}</span>
            )}
          </div>
          <label htmlFor='days'>Informe a quantidade de dias:</label>
          <input
            type='text'
            id='days'
            {...register('days')}
            placeholder='Ex: 5,10'
          />
        </div>

        <div className='buttons'>
          <button type='submit'>Calcular</button>
          <button type='reset'>Cancelar</button>
        </div>
      </form>
    </StyleDivForm>
  );
};

export default Form;
