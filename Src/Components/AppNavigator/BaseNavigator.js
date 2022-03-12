import React from "react";
import { Image } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { OnBoardingPage1, OnBoardingPage2, OnBoardingPage3 } from "../Screens/OnBoardingPage";
import { MaginPage } from "../Screens/MainPage";
import { SearhPage } from "../Screens/SearchPage";
import { ForgotPage, NewPassword, SignPage, SignPage2 } from "../Screens/SignPage";
import { ProfilePage } from "../Screens/ProfilePage";


const Stack = createStackNavigator();
function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="On Boarding1" component={OnBoardingPage1} />
        <Stack.Screen options={{ headerShown: false }} name="On Boarding2" component={OnBoardingPage2} />
        <Stack.Screen options={{ headerShown: false }} name="On Boarding3" component={OnBoardingPage3} />
        <Stack.Screen options={{ headerShown: false }} name="Sign In" component={SignPage} />
        <Stack.Screen options={{ headerShown: false }} name="Sign Up" component={SignPage2} />
        <Stack.Screen options={{ headerShown: false }} name="Forgot Page" component={ForgotPage} />
        <Stack.Screen options={{ headerShown: false }} name="New Password" component={NewPassword} />
        <Stack.Screen options={{ headerShown: false }} name="Main Page" component={BottomNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const Bottom = createBottomTabNavigator()
function BottomNavigator() {
  return (
    <Bottom.Navigator
      screenOptions={{ headerShown: false, tabBarStyle: { marginBottom: 10, marginLeft: "10%", marginRight: "10%", borderRadius: 35 } }}
    >
      <Bottom.Screen options={{ headerShown: false }} name="Home Screen" component={MaginPage}

        options={{
          tabBarIcon: ({ color }) => (
            <Image style={{ width: 25, height: 25, }} source={require('../Icons/Vector_20.png')} />), tabBarShowLabel: false
        }} />
      <Bottom.Screen name="Search Page" component={SearhPage}
        options={{
          tabBarIcon: ({ color }) => (
            <Image style={{ width: 25, height: 25, }}
              source={require('../Icons/Notification_button.png')
              } />
          ),
          tabBarShowLabel: false
        }}

      />
      <Bottom.Screen name="Profile Page" component={ProfilePage} options={{
        tabBarIcon: ({ color }) => (
          <Image style={{ width: 25, height: 25, }}
            source={require('../Icons/Profil.png')
            } />
        ),
        tabBarShowLabel: false
      }}

      />
    </Bottom.Navigator >
  )
}



export default MainNavigator;