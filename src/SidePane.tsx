/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

export const SidePane = (): JSX.Element => {
  return (
    <View
      style={{
        display: 'flex',
        backgroundColor: 'white',
        width: '75%',
        position: 'absolute',
        zIndex: 1,
        height: '100%',
      }}>
      <Text>Side Pane</Text>
    </View>
  );
};
