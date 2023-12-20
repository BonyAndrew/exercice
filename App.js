import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image, View } from 'react-native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';


import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import DashBoard from './screens/DashBoard';
import Find from './screens/Find';

import menu from './assets/menu.png'
import bony from './assets/Bony.jpg'
import back from './assets/assets/back1.png'
import share from './assets/share.png'

const tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <tab.Navigator initialRouteName="Home" screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home-outline' : 'home-outline';
          } else if (route.name === 'Find') {
            iconName = focused ? 'search' : 'search';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'document-text-outline' : 'document-text-outline';
          } else if (route.name === 'Dashboard') {
            iconName = focused ? 'notifications-outline' : 'notifications-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarLabel: () => null
      })}
        tabBarOptions={{
          activeTintColor: 'rgb(58, 146, 55)',
          inactiveTintColor: 'gray',
        }}>
        <tab.Screen name="Home" component={HomeScreen} options={{ title: ' ', headerLeft: () => (
            <Image source = {menu} />
          ), headerRight: () => (
            <Image
              source={bony}
              style={{ width: 40, height: 40, marginRight: 10, borderRadius: 20 }}
            />
          ), headerLeft: ()=> (
            <Image source={menu} style={{ width: 30, height: 30, marginLeft: 10,}}/>
          )}} />
        <tab.Screen name="Find" component={Find} options={{ tabBarStyle: { display: "none" }, }} />
        <tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarStyle: { display: "none" }, headerTitle: 'Product Detail',
                      headerTitleAlign: 'center',
                      headerBackImage: () => (
                        
                        <Image
                          source={back}
                          style={{ width: 20, height: 20, marginLeft: 10 }}
                        />),headerRight: () => (
                          <Image
                            source={share}
                            style={{ width: 30, height: 30, marginRight: 10, }}
                          />
                        ),
                      
                        headerStyle: {
                          backgroundColor: 'rgb(246, 218, 200)',
                        },}}/>
        <tab.Screen name="Dashboard" component={DashBoard} options={{
          title: ' ', tabBarStyle: { display: "none" },
        }} />
      </tab.Navigator>
    </NavigationContainer>
  );
}