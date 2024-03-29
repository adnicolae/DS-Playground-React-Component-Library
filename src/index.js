import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { PrimaryButton, 
  SecondaryButton, 
  TertiaryButton 
} from './components/Buttons';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, darkTheme, defaultTheme, vodafoneTheme } from './utils';
import { SignUpModal, SignInModal } from './components/Modals';


const App = () => {
  const [ useDarkTheme, setUseDarkTheme ] = useState(false);
  const [ showModal, setShowModal ] = useState(false);
  return (
    <ThemeProvider theme={ vodafoneTheme }>
      <GlobalStyle />
        <PrimaryButton 
          style={{ margin: '15px 16px 24px' }}
          onClick={() => setShowModal(!showModal)}>Toggle modal</PrimaryButton>
        <SignInModal showModal={showModal} />
    </ThemeProvider>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));