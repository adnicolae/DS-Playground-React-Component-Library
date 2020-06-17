import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { PrimaryButton, 
  SecondaryButton, 
  TertiaryButton 
} from './components/Buttons';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, darkTheme, defaultTheme } from './utils';

const App = () => {
  const [ useDarkTheme, setUseDarkTheme ] = useState(false);
  return (
    <ThemeProvider theme={ useDarkTheme ? darkTheme : defaultTheme }>
      <GlobalStyle />
      <button 
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }} 
        onClick={() => setUseDarkTheme(!useDarkTheme)}
      >
        Toggle dark theme
      </button>
      <div style={{
        background: useDarkTheme ? defaultTheme.primaryColor : darkTheme.primaryColor,
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
      }}>
        <PrimaryButton>Primary Button</PrimaryButton>
        <br />
        <SecondaryButton modifiers={[ 'large', 'warning', 'secondaryButtonWarning']}>Secondary Button</SecondaryButton>
        <br />
        <SecondaryButton modifiers={[ 'large', 'success', 'secondaryButtonSuccess']}>Secondary Button</SecondaryButton>
        <br />
        <SecondaryButton modifiers={[ 'large', 'error', 'secondaryButtonError']}>Secondary Button</SecondaryButton>
        <br />
        <TertiaryButton>Tertiary Button</TertiaryButton>
        <br />
        <PrimaryButton disabled>Primary Button</PrimaryButton>
        <br />
        <SecondaryButton disabled>Secondary Button</SecondaryButton>
        <br />
        <TertiaryButton disabled>Tertiary Button</TertiaryButton>
      </div>

    </ThemeProvider>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));