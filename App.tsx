/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
// In App.js in a new project

import * as React from 'react';
// import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './src/HomeScreen';
import DetailsScreen from './src/DetailsScreen';
import {Tests} from './src/CreateQuotes';
import {Platform, Pressable, StatusBar, Text, View} from 'react-native';
import {globalVariables} from './src/Data/variables';
import {useAppDispatch, useAppSelector} from './src/app/hooks';
import {setShowSidePane} from './src/slices/uiControlSlice';

export type RouteStackParams = {
  Home;
  Details;
};

const Stack = createNativeStackNavigator<RouteStackParams>();
function App() {
  const dispatch = useAppDispatch();
  const showSidePane = useAppSelector(state => state.uiControls.showSidePane); //used here to help toggle side menu with menu icon button
  const [isFavorite, setIsFavorite] = React.useState<boolean>(false);
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#5f0707"
        barStyle="light-content"
      />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {backgroundColor: '#7f0000'},
            headerTintColor: '#fff',
          }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerTitle: () => (
                <View
                  style={{
                    paddingLeft: 20,
                  }}>
                  <Text
                    style={[
                      {color: 'white'},
                      globalVariables.fonts.fontMedium,
                    ]}>
                    Quotes
                  </Text>
                </View>
              ),
              headerRight: () => (
                <Text
                  style={[{color: 'white'}, globalVariables.fonts.fontMedium]}>
                  All
                </Text>
              ),
              headerLeft: () => (
                <Pressable
                  onPress={() => {
                    // alert(`Device OS: ${Platform.OS}, Platform version: ${Platform.Version}`);
                    dispatch(setShowSidePane(!showSidePane));
                  }}>
                  <Icon name="navicon" size={20} color="#fff" />
                </Pressable>
              ),
            }}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            // options={({route}) => ({
            //   title: `Quotes: ${route.params.quoteID}`,
            // })}
            options={({route}) => ({
              title: 'Details',
              headerRight: () => (
                <View style={{flexDirection: 'row', columnGap: 25}}>
                  <Pressable
                    onPress={() => setIsFavorite(prevState => !prevState)}>
                    {isFavorite ? (
                      <Icon name="star" size={20} color="#fff" />
                    ) : (
                      <Icon name="star-o" size={20} color="#fff" />
                    )}
                  </Pressable>
                  {/* share */}
                  <Pressable onPress={() => alert(route.params.quoteID)}>
                    <Icon name="share" size={20} color="#fff" />
                  </Pressable>
                </View>
              ),
            })}
          />
          {/* <Stack.Screen name="Tests" component={Tests} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
