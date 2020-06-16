import React from 'react';
import ReactDOM from 'react-dom';
import { PrimaryButton, 
  SecondaryButton, 
  TertiaryButton 
} from './components/Buttons';
import { GlobalStyle } from './utils';

const App = () => (
  <>
  <GlobalStyle />
  <PrimaryButton>Primary Button</PrimaryButton>
  <br />
  <SecondaryButton>Secondary Button</SecondaryButton>
  <br />
  <TertiaryButton>Tertiary Button</TertiaryButton>
  <br />
  <PrimaryButton disabled>Primary Button</PrimaryButton>
  <br />
  <SecondaryButton disabled>Secondary Button</SecondaryButton>
  <br />
  <TertiaryButton disabled>Tertiary Button</TertiaryButton>
  </>
);

ReactDOM.render(<App />, document.querySelector('#root'));