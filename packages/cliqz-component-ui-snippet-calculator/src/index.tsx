import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  calculate,
  localizedExp
} from './utils';

const styles = StyleSheet.create({
  answerText: {
    color: '#212121',
    fontSize: 29,
    fontWeight: '400',
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: 100,
    maxWidth: 584,
  },
  expressionText: {
    color: '#424242',
    fontSize: 11,
    fontWeight: '400',
  },
});

interface CalcProps {
  data: {
    expression: string;
    locale: string;
  }
}

export class CalculatorSnippet extends React.PureComponent <
  CalcProps
> {
  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.expressionText}>{localizedExp(this.props.data.expression, this.props.data.locale)}</Text>
        <Text style={styles.answerText}>{calculate(this.props.data.expression, this.props.data.locale)}</Text>
      </View>
    )
  }
}