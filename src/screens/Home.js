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
    </View>
  );
}

export default Buttons;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
