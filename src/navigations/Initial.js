import * as React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";

// Bottom Tabs
import BottomTabs from "../screens/BottomTabs/BottomTabs";
import BottomTab1 from "../navigations/BottomTab1";
import BottomTab2 from "../navigations/BottomTab2";
import BottomTab3 from "../navigations/BottomTab3";

// Navigation Transitions
import NavigationTransitionStack from "../navigations/NavigationTransitionStack";

// Drawer
import DrawerStack from "./DrawerStack";

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
        options={{ headerBackTitleVisible: false, title: "Basic Bottom Tab" }}
      />
      <Stack.Screen
        name="BottomTab2"
        component={BottomTab2}
        options={{ headerBackTitleVisible: false, title: "Custom Bottom Tab" }}
      />
      <Stack.Screen
        name="BottomTab3"
        component={BottomTab3}
        options={{ headerBackTitleVisible: false, title: "Custom Bottom Tab" }}
      />
      <Stack.Screen
        name="NavigationTransitionStack"
        component={NavigationTransitionStack}
        options={{
          headerShown: false,
          headerBackTitleVisible: false,
          title: "Custom Navigation Transitions",
        }}
      />
      <Stack.Screen
        name="DrawerStack"
        component={DrawerStack}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default Initial;
