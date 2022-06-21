import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Startup from './screens/startup';
import Restaurants from './screens/restaurants';
import Login from './screens/login_signup';
import ItemMenu from './screens/itemmenu';
import RestaurantItems from './components/restaurantItems';
import Checkout from './screens/checkout';
import Location from './screens/location';
import FunctionProvider from './data/context';
import AccountScreen from './screens/account';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Restaurants}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons style={{ color: focused ? 'dodgerblue' : 'black' }} name='home-outline' size={24} />
            </View>
          ),
          headerShown: false
        }}
      />
      <Tab.Screen name="Account" component={AccountScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons style={{ color: focused ? 'dodgerblue' : 'black' }} name='person-outline' size={24} />
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const Stack = createNativeStackNavigator();
  const screenOptions = {
    headerShown: false,
  };
  return (
    <FunctionProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={screenOptions} >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Welcome" component={Startup} />
          <Stack.Screen name="Location" component={Location} />
          <Stack.Screen name="RestaurantsHeader" component={MyTabs} />
          <Stack.Screen name="Item Menu" component={ItemMenu} />
          <Stack.Screen name="RestaurantItems" component={RestaurantItems} />
          <Stack.Screen name="Checkout" component={Checkout} />
        </Stack.Navigator>
      </NavigationContainer>
    </FunctionProvider>
  );
}

export default App;
