import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { fonts } from "../../Theme";
import Loading from "../../Components/Loading/Loading";

export default function Start() {
  return (
    <View style={styles.container}>
      <Text style={styles.saludo}>Hola mundo</Text>
      <View style={{ padding: 20 }}>
        <Loading loading={true} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  saludo: {
    fontSize: 30,
    fontFamily: fonts.openSan.regular,
  },
});
