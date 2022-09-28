import React from "react";
import { View, StyleSheet } from "react-native";

import Button from "../../components/Button";

const SharedElementTransitions = ({ navigation }) => {
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
    </View>
  );
};

export default SharedElementTransitions;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
