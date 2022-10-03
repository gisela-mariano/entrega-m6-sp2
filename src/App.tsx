import React from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Result from './components/Result';
import { StyleDivApp } from './styles/style';

function App() {
  return (
    <>
      <StyleDivApp>
        <Header />

        <main>
          <div className='cont-main'>
            <Form />
            <Result />
          </div>
        </main>
      </StyleDivApp>
    </>
  );
}

export default App;
