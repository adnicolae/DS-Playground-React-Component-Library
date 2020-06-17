import { blue, neutral, yellow, red, green } from './colors';
import { headingsFont, primaryFont } from './typography';

export const defaultTheme = {
  primaryColor: blue[300],
  primaryHoverColor: blue[400],
  primaryActiveColor: blue[500],
  textColorOnPrimary: neutral[100],
  textColor: neutral[600],
  textColorInverted: neutral[100],
  primaryHeadingsFont: headingsFont,
  primaryFont: primaryFont,
  disabled: neutral[400],
  textOnDisabled: neutral[300],
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300]
  }
};