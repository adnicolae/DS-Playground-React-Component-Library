import styled from 'styled-components';
import { defaultTheme } from '../utils';
import { typeScale } from '../utils';

export const Button = styled.button`
  padding: 8px 12px;
  font-size: ${ typeScale.p };
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${ defaultTheme.primaryFont };
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
`;

export const PrimaryButton = styled(Button)`
  background: ${ defaultTheme.primaryColor };  
  color: ${ defaultTheme.textColorOnPrimary };
`;

export const SecondaryButton = styled(Button)`
  background: none;
  color: ${ defaultTheme.primaryColor };
  border: 1px solid ${ defaultTheme.primaryColor };
  box-sizing: border-box;
`;

export const TertiaryButton = styled(Button)`
  background: none;
  color: ${ defaultTheme.primaryColor };
  box-shadow: none;
`;