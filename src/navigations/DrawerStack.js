import * as React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import DrawerNavigations from "../screens/Drawer/DrawerNavigations";
import Drawer1 from "./Drawer1";
import Drawer2 from "./Drawer2";

const Stack = createStackNavigator();

function DrawerStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DrawerNavigations"
        component={DrawerNavigations}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
          title: "Drawer Navigations",
        }}
      />
      <Stack.Screen
        name="DrawerNavigation1"
        component={Drawer1}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DrawerNavigation2"
        component={Drawer2}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default DrawerStack;
