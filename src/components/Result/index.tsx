import { useContext } from 'react';
import { IForm } from '../../interfaces';
import { AmountResultContext } from '../../Providers/AmountResultProvider';
import { AmountResultStatusContext } from '../../Providers/AmountStatusProvider';
import { IsLoadingContext } from '../../Providers/IsLoadingProvider';
import StyleDivResult from './style';
import loading from '../../assets/img/loading.gif';
import { IsRequestedContext } from '../../Providers/IsRequestedProvider';

const Result = () => {
  const { amount } = useContext(AmountResultContext);
  const { status } = useContext(AmountResultStatusContext);
  const { isLoading } = useContext(IsLoadingContext);
  const { isRequested } = useContext(IsRequestedContext);

  const keys = Object.keys(amount);

  // console.log(isLoading);
  console.log(status);
  // console.log(amount);

  return (
    <StyleDivResult>
      <h3>Você Receberá:</h3>

      <div className='cont-results'>
        {/* {keys.length === 0 ? (
          <span className='empty'>
            Preencha os campos para ver o resultado.
          </span>
        ) : (
          keys.map((key, index) => {
            const day = parseInt(key);
            const value = amount[key];

            return (
              <div className='cont-results' key={index}>
                <span className='anticipation-value'>
                  Em {day} {day <= 1 ? 'dia' : 'dias'}:{' '}
                  <strong>R$ {value.toFixed(2)}</strong>{' '}
                </span>
              </div>
            );
          })
        )} */}

        {isRequested === false ? (
          <span className='empty'>
            Preencha os campos para ver o resultado.
          </span>
        ) : (
          (() => {
            if (isLoading)
              return (
                <div className='cont-loading'>
                  <img src={loading} alt='Loading' className='loading' />
                </div>
              );

            if (status === 408) {
              return (
                <span className='timeout'>
                  Tempo de execução esgotado. Tente novamente.
                </span>
              );
            } else if (status === 500) {
              return (
                <span className='internal-error'>
                  Erro no servidor. Tente novamente.
                </span>
              );
            }

            return keys.map((key, index) => {
              const day = parseInt(key);
              const value = amount[key];

              return (
                <div className='cont-results' key={index}>
                  <span className='anticipation-value'>
                    Em {day} {day <= 1 ? 'dia' : 'dias'}:{' '}
                    <strong>R$ {value.toFixed(2)}</strong>{' '}
                  </span>
                </div>
              );
            });
          })()
        )}
      </div>
    </StyleDivResult>
  );
};

export default Result;
