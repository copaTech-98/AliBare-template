import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Start from "../../../Pages/Start/Start";
import { colors } from "../../../Theme";

const Stack = createStackNavigator();

const navigationProps = {
  headerTintColor: "white",
  headerStyle: { backgroundColor: colors.darkPurple },
  headerTitleStyle: { fontSize: 18 },
  headerMode: "screen",
};

// ------------------------------------
// Navigators
// ------------------------------------

export const HomeNavigation = () => (
  <Stack.Navigator initialRouteName="Start" screenOptions={navigationProps}>
    <Stack.Screen
      name="Start"
      component={Start}
      options={{ title: "Start", headerShown: false }}
    />
  </Stack.Navigator>
);
