import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import NewsFeed from './components/NewsFeed';
import NewsHistory from './components/NewsHistory';
import NewsSource from './components/NewsSource';
import NewsDetails from './components/NewsDetails';
import SourcePage from './components/SourcePage';
import {StatusBar} from 'react-native';

import {Provider} from 'react-redux';
import store from './store';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={NewsFeed} />
      <Tab.Screen name="History" component={NewsHistory} />
      <Tab.Screen name="Sources" component={NewsSource} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={MainTabNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Details" component={NewsDetails} />
          <Stack.Screen name="SourcePage" component={SourcePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
