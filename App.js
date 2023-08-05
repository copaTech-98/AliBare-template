import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import images, { imageAssets } from "./src/Theme/images";
import fonts, { fontAssets } from "./src/Theme/fonts";
import { PaperProvider, ProgressBar } from "react-native-paper";
import { colors } from "./src/Theme";
import Loading from "./src/Components/Loading/Loading";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigator from "./src/Components/Navigator/Navigator";

export default function App() {
  const [didLoad, setDidLoad] = useState(false);

  const handleLoadAssets = async () => {
    await Promise.all([...imageAssets, ...fontAssets]);
    setDidLoad(true);
  };
  useEffect(() => {
    handleLoadAssets();
  }, []);
  return (
    <PaperProvider>
      <StatusBar style="auto" />
      {didLoad ? (
        <SafeAreaProvider>
          <Navigator />
        </SafeAreaProvider>
      ) : (
        <View style={styles.container}>
          <Loading loading={!didLoad} />
        </View>
      )}
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
