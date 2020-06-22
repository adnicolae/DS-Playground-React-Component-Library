import { ThemeProvider } from 'styled-components';
import { defaultTheme, darkTheme, vodafoneTheme } from '../src/utils';

export const contexts = [
  {
    icon: 'box',
    title: 'Themes',
    components: [ ThemeProvider ],
    params: [
      { name: "Default Theme", props: { theme: defaultTheme } },
      { name: "Dark Theme", props: { theme: darkTheme } },
      { name: "Vodafone Theme", props: { theme: vodafoneTheme, default: true }}
    ],
    options: {
      deep: true,
      disable: false,
      cancelable: false
    }
  }
]