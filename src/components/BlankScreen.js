import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BlankScreen = ({ name }) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default BlankScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 16,
  },
});
