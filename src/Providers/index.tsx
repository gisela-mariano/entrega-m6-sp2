import { IReactChildren } from '../interfaces';
import { AmountResultProvider } from './AmountResultProvider';
import { AmountResultStatusProvider } from './AmountStatusProvider';
import { IsLoadingProvider } from './IsLoadingProvider';
import { IsRequestedProvider } from './IsRequestedProvider';

const Providers = ({ children }: IReactChildren) => {
  return (
    <AmountResultProvider>
      <AmountResultStatusProvider>
        <IsLoadingProvider>
          <IsRequestedProvider>{children}</IsRequestedProvider>
        </IsLoadingProvider>
      </AmountResultStatusProvider>
    </AmountResultProvider>
  );
};

export default Providers;
