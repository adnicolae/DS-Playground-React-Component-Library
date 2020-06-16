import React from 'react';
import ReactDOM from 'react-dom';
import { PrimaryButton, SecondaryButton, TertiaryButton } from './components/Buttons';

const App = () => (
  <>
  <PrimaryButton>Primary Button</PrimaryButton>
  <br />
  <SecondaryButton>Secondary Button</SecondaryButton>
  <br />
  <TertiaryButton>Tertiary Button</TertiaryButton>
  </>
);

ReactDOM.render(<App />, document.querySelector('#root'));