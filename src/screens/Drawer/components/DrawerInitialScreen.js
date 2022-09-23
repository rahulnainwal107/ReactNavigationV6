import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DrawerInitialScreen = ({ navigation }) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textStyle} onPress={goBack}>
        Go Back
      </Text>
    </View>
  );
};

export default DrawerInitialScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 16,
  },
});
