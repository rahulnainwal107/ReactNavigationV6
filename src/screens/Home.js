import * as React from "react";
import { View, StyleSheet } from "react-native";

import Button from "../components/Button";

function Buttons({ navigation }) {
  const onButtonPress = (routeName, userName, fromScreen) => {
    userName && fromScreen
      ? navigation.navigate(routeName, { userName, fromScreen })
      : navigation.navigate(routeName);
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
      <Button
        buttonName={"Drawer Navigations"}
        onPress={onButtonPress.bind(this, "DrawerStack")}
      />
      <Button
        buttonName={"Shared Element Transitions"}
        onPress={onButtonPress.bind(this, "SharedElementTransitionStack")}
      />
      <Button
        buttonName={"Set Params"}
        subText="To illustrate how setParams method works"
        onPress={onButtonPress.bind(this, "SetParams", "Rahul Nainwal", "Home")}
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
