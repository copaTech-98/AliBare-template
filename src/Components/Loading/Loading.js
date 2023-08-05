import * as React from "react";
import { ActivityIndicator } from "react-native-paper";
import { colors } from "../../Theme";

export default function Loading({ loading }) {
  return (
    <ActivityIndicator
      animating={loading}
      color={colors.primary}
      size={"large"}
    />
  );
}
