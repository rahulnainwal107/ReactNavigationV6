import * as React from "react";
import { View, StyleSheet } from "react-native";

import Button from "../components/Button";

function Buttons({ navigation }) {
  const onButtonPress = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.mainContainer}>
      <Button
        buttonName={"Bottom Tabs"}
        onPress={onButtonPress.bind(this, "BottomTabs")}
      />
      <Button
        buttonName={"Navigation Transitions"}
        onPress={onButtonPress.bind(this, "NavigationTransitionStack")}
      />
    </View>
  );
}

export default Buttons;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
