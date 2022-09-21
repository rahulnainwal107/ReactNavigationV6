import "react-native-gesture-handler";
import { StyleSheet, StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import Initial from "./src/navigations/Initial";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Initial />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
