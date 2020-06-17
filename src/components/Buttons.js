import styled from 'styled-components';
import { applyStyleModifiers } from "styled-components-modifiers";

import { defaultTheme } from '../utils';
import { typeScale } from '../utils';

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${ typeScale.helperText };
    padding: 8px;
  `,
  large: () => `
    font-size: ${ typeScale.h5 };
    padding: 16px 24px;
  `,
  warning: () => `
    background: none;
    color: ${ defaultTheme.status.warningColor };

    &:hover {
      background-color: ${ defaultTheme.status.warningColorHover };
    }

    &:focus {
      outline: 1px solid ${ defaultTheme.status.warningColorHover};
      outline-offset: 2px;
    }

    &:active {
      background-color: ${ defaultTheme.status.warningColorActive };
      border-color: ${ defaultTheme.status.warningColorActive };
    }
  `,
  primaryButtonWarning: () => `
    background-color: ${ defaultTheme.status.warningColor };
    color: ${ defaultTheme.textColorInverted };
  `,
  secondaryButtonWarning: () => `
    border: 2px solid ${ defaultTheme.status.warningColor }; 
  `,
  error: () => `
    background: none;
    color: ${ defaultTheme.status.errorColor };

    &:hover {
      background-color: ${ defaultTheme.status.errorColorHover };
    }

    &:focus {
      outline: 1px solid ${ defaultTheme.status.errorColorHover};
      outline-offset: 2px;
    }

    &:active {
      background-color: ${ defaultTheme.status.errorColorActive };
      border-color: ${ defaultTheme.status.errorColorActive };
    }
  `,
  primaryButtonError: () => `
    background-color: ${ defaultTheme.status.errorColor };
    color: ${ defaultTheme.textColorInverted };
  `,
  secondaryButtonError: () => `
    border: 2px solid ${ defaultTheme.status.errorColor }; 
  `,
  success: () => `
    background: none;
    color: ${ defaultTheme.status.successColor };

    &:hover {
      background-color: ${ defaultTheme.status.successColorHover };
    }

    &:focus {
      outline: 1px solid ${ defaultTheme.status.successColorHover};
      outline-offset: 2px;
    }

    &:active {
      background-color: ${ defaultTheme.status.successColorActive };
      border-color: ${ defaultTheme.status.successColorActive };
    }
  `,
  primaryButtonSuccess: () => `
    background-color: ${ defaultTheme.status.successColor };
    color: ${ defaultTheme.textColorInverted };
  `,
  secondaryButtonSuccess: () => `
    border: 2px solid ${ defaultTheme.status.successColor }; 
  `
}

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
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
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
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
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
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;