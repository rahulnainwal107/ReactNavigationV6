import * as React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import BottomTabs from "../screens/BottomTabs/BottomTabs";
import BottomTab1 from "../navigations/BottomTab1";

const Stack = createNativeStackNavigator();

function Initial() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{ headerBackTitleVisible: false }}
      />
      <Stack.Screen
        name="BottomTab1"
        component={BottomTab1}
        options={{ headerBackTitleVisible: false }}
      />
    </Stack.Navigator>
  );
}

export default Initial;
