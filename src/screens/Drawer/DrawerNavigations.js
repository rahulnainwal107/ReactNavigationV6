import React from "react";
import { View, StyleSheet } from "react-native";

import Button from "../../components/Button";

const DrawerNavigation = ({ navigation }) => {
  const onButtonPress = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.mainContainer}>
      <Button
        buttonName={"Basic Drawer"}
        subText=""
        onPress={onButtonPress.bind(this, "DrawerNavigation1")}
      />
      <Button
        buttonName={"Custom Drawer 1"}
        subText="Customized Drawer"
        onPress={onButtonPress.bind(this, "DrawerNavigation2")}
      />
    </View>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
