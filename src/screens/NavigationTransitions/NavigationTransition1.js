import React from "react";
import { View, StyleSheet } from "react-native";

import Button from "../../components/Button";

const NavigationTransition1 = ({ navigation }) => {
  const onButtonPress = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.styles}>
      <Button
        buttonName={"Screen 1"}
        onPress={onButtonPress.bind(this, "CustomNavigationTransition1Screen1")}
      />
      <Button
        buttonName={"Screen 2"}
        onPress={onButtonPress.bind(this, "CustomNavigationTransition1Screen2")}
      />
      <Button
        buttonName={"Screen 3"}
        onPress={onButtonPress.bind(this, "CustomNavigationTransition1Screen3")}
      />
    </View>
  );
};

export default NavigationTransition1;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
