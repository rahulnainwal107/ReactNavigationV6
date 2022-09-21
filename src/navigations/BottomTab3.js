import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Screen1 from "../screens/BottomTabs/components/Screen1";
import Screen2 from "../screens/BottomTabs/components/Screen2";
import Screen3 from "../screens/BottomTabs/components/Screen3";
import CustomBottomTab3 from "../components/CustomBottomTab3";

const Tab = createBottomTabNavigator();

function BottomTab3() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
      tabBar={(props) => <CustomBottomTab3 {...props} />}
    >
      <Tab.Screen name="Home" component={Screen1} />
      <Tab.Screen name="Settings" component={Screen2} />
      <Tab.Screen name="Profile" component={Screen3} />
    </Tab.Navigator>
  );
}

export default BottomTab3;
