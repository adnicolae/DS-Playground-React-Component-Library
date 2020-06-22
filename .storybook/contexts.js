import { ThemeProvider } from 'styled-components';
import { defaultTheme, darkTheme, vodafoneTheme } from '../src/utils';

export const contexts = [
  {
    icon: 'box',
    title: 'Themes',
    components: [ ThemeProvider ],
    params: [
      { name: "Default Theme", props: { theme: defaultTheme, default: true } },
      { name: "Dark Theme", props: { theme: darkTheme } },
      { name: "Vodafone Theme", props: { theme: vodafoneTheme }}
    ],
    options: {
      deep: true,
      disable: false,
      cancelable: false
    }
  }
]