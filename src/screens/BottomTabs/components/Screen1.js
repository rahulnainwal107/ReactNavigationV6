import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Screen1 = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff726f",
  },
  text: {
    color: "black",
    fontSize: 16,
  },
});
