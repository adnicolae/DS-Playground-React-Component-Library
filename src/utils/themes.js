import { blue, neutral, yellow, red, green } from './colors';
import { primary, neutralVdf } from './vdf-colors';
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
  textFieldBackground: neutral[200],
  textFieldLabelColor: neutralVdf['mineshaft'],
  formModalBackground: neutral[100],
  formModalTextColor: neutral[600],
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

export const darkTheme = {
  primaryColor: neutral[100],
  primaryHoverColor: neutral[200],
  primaryActiveColor: neutral[100],
  textColorOnPrimary: blue[300],
  textColor: blue[300],
  textColorInverted: neutral[100],
  textFieldBackground: neutral[200],
  textFieldLabelColor: neutralVdf['mineshaft'],
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

export const vodafoneTheme = {
  primaryColor: primary['vf-red'],
  primaryHoverColor: primary['maroon'],
  primaryActiveColor: primary['dark-red'],
  textColorOnPrimary: neutral[100],
  textColor: neutralVdf['mineshaft'],
  textFieldBackground: neutral[200],
  textFieldLabelColor: neutralVdf['mineshaft'],
  textColorInverted: neutral[100],
  primaryHeadingsFont: headingsFont,
  primaryFont: primaryFont,
  disabled: neutral[400],
  textOnDisabled: neutral[300],
  formModalBackground: neutral[100],
  formModalTextColor: neutral[600],
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