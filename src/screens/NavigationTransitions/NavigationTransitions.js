import React from "react";
import { View, StyleSheet } from "react-native";

import Button from "../../components/Button";

const NavigationTransitions = ({ navigation }) => {
  const onButtonPress = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.mainContainer}>
      <Button
        buttonName={"Custom Navigation Transition 1"}
        subText="Basic custom navigation transition"
        onPress={onButtonPress.bind(this, "NavigationTransitionStack1")}
      />
      <Button
        buttonName={"Custom Navigation Transition 2"}
        subText="Basic custom navigation with custom transition"
        onPress={onButtonPress.bind(this, "NavigationTransitionStack2")}
      />
      <Button
        buttonName={"Shared element transition 1"}
        subText=""
        onPress={null}
      />
    </View>
  );
};

export default NavigationTransitions;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
