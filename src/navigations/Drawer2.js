import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";

import DrawerInitialScreen from "../screens/Drawer/components/DrawerInitialScreen";
import Screen1 from "../screens/BottomTabs/components/Screen1";
import Screen2 from "../screens/BottomTabs/components/Screen2";
import CustomDrawerContent from "../components/CustomDrawer2Content";

const Drawer = createDrawerNavigator();

const Drawer2 = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: "green",
        drawerActiveTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="DrawerInitialScreen"
        component={DrawerInitialScreen}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "apps" : "apps-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Screen1"
        component={Screen1}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "airplane" : "airplane-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Screen2"
        component={Screen2}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "bug" : "bug-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default Drawer2;
