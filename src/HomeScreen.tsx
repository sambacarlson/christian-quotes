/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, Image, Pressable, Text, View} from 'react-native';
import {quotes} from './Data/quotes';
import {globalVariables} from './Data/variables';
import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteStackParams} from '../App';
import {useAppSelector} from './app/hooks';
import {SidePane} from './SidePane';

export default function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RouteStackParams>>();
  // const [pressed, setPressed] = React.useState(1);
  const colors = globalVariables.theme;
  const fonts = globalVariables.fonts;
  const showSidePane = useAppSelector(state => state.uiControls.showSidePane);
  return (
    <View
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        backgroundColor: 'white',
      }}>
      {showSidePane && <SidePane />}
      <View
        style={{
          flex: 10,
          marginTop: 0,
        }}>
        <FlatList
          data={quotes}
          keyExtractor={quote => quote.quoteID}
          renderItem={({item}) => {
            return (
              <Pressable
                onPress={() =>
                  navigation.navigate('Details', {quoteID: item.quoteID})
                }
                style={{
                  backgroundColor: colors.colorPrimary,
                  marginHorizontal: 6,
                  marginVertical: 3,
                  flexDirection: 'row',
                }}>
                <View style={{flex: 1}}>
                  <Image
                    source={{uri: item.quoteImage}}
                    style={{
                      resizeMode: 'cover',
                      width: 90,
                      height: 100,
                    }}
                  />
                </View>
                <View
                  style={{
                    flex: 3,
                    paddingHorizontal: 20,
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}>
                  <Text style={[{color: 'white'}, fonts.fontNormal]}>
                    {item.quoteText}
                  </Text>
                </View>
              </Pressable>
            );
          }}
        />
      </View>
    </View>
  );
}
