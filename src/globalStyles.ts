import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  col_container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    columnGap: 4,
  },
  row_container: {
    flexDirection: 'row',
    alignItem: 'center',
    flex: 1,
  },
});
