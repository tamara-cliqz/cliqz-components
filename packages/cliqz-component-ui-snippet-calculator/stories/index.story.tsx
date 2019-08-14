import { storiesOf } from '@storybook/react';
import React from 'react';
import { CalculatorSnippet } from '../src/index';

storiesOf('CalculatorSnippet', module).add('1,1 + 1,1 =', () => (
  <CalculatorSnippet data={{ expression: '1,1 + 1,1 =', locale: 'de' }}/>
));
