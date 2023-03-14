/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {quotes} from './Data/quotes';
import {globalVariables} from './Data/variables';
import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteStackParams} from '../App';

export default function DetailsScreen({route}) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RouteStackParams>>();
  //TODO: fixed typescript types
  const {quoteID} = route.params;
  const quoteArr = quotes.filter(quote => {
    return quote.quoteID === quoteID;
  });
  const thisQuote = quoteArr[0];
  const colors = globalVariables.theme;
  const fonts = globalVariables.fonts;
  const natureImage =
    'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg';

  React.useEffect(() => {
    //NOTE: useEffect not really neccessary here
    navigation.setOptions({title: thisQuote.quoteCategory});
  }, []);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'red',
          position: 'relative',
        }}>
        <Image
          source={{uri: natureImage}}
          style={{width: '100%', height: '100%'}}
          alt="${thisQuote.quoteAuthor}"
          resizeMethod="resize"
          resizeMode="cover"
        />
        <View
          style={{
            position: 'absolute',
            width: '100%',
            zIndex: 2,
            top: '50%',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Image
            source={{uri: thisQuote.quoteImage}}
            style={{
              width: 120,
              height: 120,
              borderRadius: 100,
              borderWidth: 2,
              borderColor: 'white',
            }}
          />
        </View>
      </View>
      <View
        style={{
          flex: 2,
          flexDirection: 'column',
          rowGap: 5,
          marginHorizontal: '6%',
          paddingTop: '5%',
        }}>
        <Text
          selectable={true}
          style={[fonts.fontMedium, {textAlign: 'center'}]}>
          {thisQuote.quoteText}
        </Text>
        <Pressable onPress={() => alert('open link?')}>
          <Text
            style={[
              fonts.fontSmall,
              {
                color: colors.colorPrimary,
                textAlign: 'right',
                fontStyle: 'italic',
                textDecorationLine: 'underline',
              },
            ]}>
            {thisQuote.quoteSource}
          </Text>
        </Pressable>

        <Text style={[fonts.fontLarge, {textAlign: 'center', marginTop: 8}]}>
          {thisQuote.quoteAuthor}
        </Text>
      </View>
    </View>
  );
}
