import React from 'react';
import {StyleSheet, Text} from 'react-native/types';
import PropTypes from 'prop-types';

export class HeaderText extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Text style={styles.HeaderText}>{this.props.text}</Text>;
  }
}
HeaderText.propTypes = {text: PropTypes.string.isRequired};

const styles = StyleSheet.create({
  HeaderText: {
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: 'Arial',
  },
});
