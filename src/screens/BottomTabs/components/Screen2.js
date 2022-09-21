import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Screen2 = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Setting</Text>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF5733",
  },
  text: {
    color: "black",
    fontSize: 16,
  },
});
