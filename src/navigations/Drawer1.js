import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import DrawerInitialScreen from "../screens/Drawer/components/DrawerInitialScreen";
import Screen1 from "../screens/BottomTabs/components/Screen1";
import Screen2 from "../screens/BottomTabs/components/Screen2";

const Drawer = createDrawerNavigator();

const Drawer1 = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="DrawerInitialScreen"
        component={DrawerInitialScreen}
      />
      <Drawer.Screen name="Screen1" component={Screen1} />
      <Drawer.Screen name="Screen2" component={Screen2} />
    </Drawer.Navigator>
  );
};

export default Drawer1;
