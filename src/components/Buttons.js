import styled from 'styled-components';
import { applyStyleModifiers } from "styled-components-modifiers";
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
  warning: ({ theme }) => `
    background: none;
    color: ${ theme.status.warningColor };

    &:hover {
      background-color: ${ theme.status.warningColorHover };
    }

    &:focus {
      outline: 1px solid ${ theme.status.warningColorHover};
      outline-offset: 2px;
    }

    &:active {
      background-color: ${ theme.status.warningColorActive };
      border-color: ${ theme.status.warningColorActive };
    }
  `,
  primaryButtonWarning: ({ theme }) => `
    background-color: ${ theme.status.warningColor };
    color: ${ theme.textColorInverted };
  `,
  secondaryButtonWarning: ({ theme }) => `
    border: 2px solid ${ theme.status.warningColor }; 
  `,
  error: ({ theme }) => `
    background: none;
    color: ${ theme.status.errorColor };

    &:hover {
      background-color: ${ theme.status.errorColorHover };
    }

    &:focus {
      outline: 1px solid ${ theme.status.errorColorHover};
      outline-offset: 2px;
    }

    &:active {
      background-color: ${ theme.status.errorColorActive };
      border-color: ${ theme.status.errorColorActive };
    }
  `,
  primaryButtonError: ({ theme }) => `
    background-color: ${ theme.status.errorColor };
    color: ${ theme.textColorInverted };
  `,
  secondaryButtonError: ({ theme }) => `
    border: 2px solid ${ theme.status.errorColor }; 
  `,
  success: ({ theme }) => `
    background: none;
    color: ${ theme.status.successColor };

    &:hover {
      background-color: ${ theme.status.successColorHover };
    }

    &:focus {
      outline: 1px solid ${ theme.status.successColorHover};
      outline-offset: 2px;
    }

    &:active {
      background-color: ${ theme.status.successColorActive };
      border-color: ${ theme.status.successColorActive };
    }
  `,
  primaryButtonSuccess: ({ theme }) => `
    background-color: ${ theme.status.successColor };
    color: ${ theme.textColorInverted };
  `,
  secondaryButtonSuccess: ({ theme }) => `
    border: 2px solid ${ theme.status.successColor }; 
  `
}

export const Button = styled.button`
  padding: 8px 12px;
  font-size: ${ typeScale.p };
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${ props => props.theme.primaryFont };
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${ props => props.theme.primaryHoverColor };
    color: ${ props => props.theme.textColorOnPrimary };
  }

  &:focus {
    outline: 1px solid ${ props => props.theme.primaryHoverColor };
    outline-offset: 2px;
  }

  &:active {
    background-color: ${ props => props.theme.primaryActiveColor };
    border-color: ${ props => props.theme.primaryActiveColor };
    color: ${ props => props.theme.textColorOnPrimary };
  }
`;

export const PrimaryButton = styled(Button)`
  background: ${ props => props.theme.primaryColor };  
  color: ${ props => props.theme.textColorOnPrimary };

  &:disabled {
    background-color: ${ props => props.theme.disabled };
    color: ${ props => props.theme.textOnDisabled };
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  background: none;
  color: ${ props => props.theme.primaryColor };
  border: 1px solid ${ props => props.theme.primaryColor };
  box-sizing: border-box;

  &:disabled {
    background: none;
    border-color: ${ props => props.theme.disabled };
    color: ${ props => props.theme.disabled };
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  background: none;
  color: ${ props => props.theme.primaryColor };
  box-shadow: none;

  &:disabled {
    background: none;
    color: ${ props => props.theme.disabled };
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;