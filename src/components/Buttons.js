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
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${ defaultTheme.primaryHoverColor };
    color: ${ defaultTheme.textColorOnPrimary };
  }

  &:focus {
    outline: 1px solid ${ defaultTheme.primaryHoverColor };
    outline-offset: 2px;
  }

  &:active {
    background-color: ${ defaultTheme.primaryActiveColor };
    border-color: ${ defaultTheme.primaryActiveColor };
    color: ${ defaultTheme.textColorOnPrimary };
  }
`;

export const PrimaryButton = styled(Button)`
  background: ${ defaultTheme.primaryColor };  
  color: ${ defaultTheme.textColorOnPrimary };

  &:disabled {
    background-color: ${ defaultTheme.disabled };
    color: ${ defaultTheme.textOnDisabled };
    cursor: not-allowed;
  }
`;

export const SecondaryButton = styled(Button)`
  background: none;
  color: ${ defaultTheme.primaryColor };
  border: 1px solid ${ defaultTheme.primaryColor };
  box-sizing: border-box;

  &:disabled {
    background: none;
    border-color: ${ defaultTheme.disabled };
    color: ${ defaultTheme.disabled };
    cursor: not-allowed;
  }
`;

export const TertiaryButton = styled(Button)`
  background: none;
  color: ${ defaultTheme.primaryColor };
  box-shadow: none;

  &:disabled {
    background: none;
    color: ${ defaultTheme.disabled };
    cursor: not-allowed;
  }
`;