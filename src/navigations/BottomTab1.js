import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";

import Screen1 from "../screens/BottomTabs/components/Screen1";
import Screen2 from "../screens/BottomTabs/components/Screen2";
import Screen3 from "../screens/BottomTabs/components/Screen3";
import Screen4 from "../screens/BottomTabs/components/Screen4";

const Tab = createBottomTabNavigator();

function BottomTab1() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        headerTitle: "Bottom Tab 1",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } else {
            iconName = focused ? "reader" : "reader-outline";
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={Screen1} />
      <Tab.Screen name="Settings" component={Screen2} />
      <Tab.Screen name="Profile" component={Screen3} />
      <Tab.Screen name="Details" component={Screen4} />
    </Tab.Navigator>
  );
}

export default BottomTab1;
