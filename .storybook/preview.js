import { addParameters, addDecorator } from '@storybook/react';
import { withContexts } from '@storybook/addon-contexts/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { contexts } from './contexts';

addParameters({
  backgrounds: [
    { name: "Default", value: "#ffffff", default: true },
    { name: "Mineshaft", value: "#333333" }
  ]
});

addDecorator(withA11y)
addDecorator(withKnobs);
addDecorator(withContexts(contexts));