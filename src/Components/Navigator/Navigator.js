import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { HomeNavigation } from "./Stacks/Stacks";

export default function Navigator() {
  return (
    <NavigationContainer>
      <HomeNavigation />
    </NavigationContainer>
  );
}
