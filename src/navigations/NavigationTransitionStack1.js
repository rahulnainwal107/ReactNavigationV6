import * as React from "react";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { Easing } from "react-native-reanimated";

import NavigationTransition1 from "../screens/NavigationTransitions/NavigationTransition1";
import Screen1 from "../screens/BottomTabs/components/Screen1";
import Screen2 from "../screens/BottomTabs/components/Screen2";
import Screen3 from "../screens/BottomTabs/components/Screen3";

const Stack = createStackNavigator();

const openConfig = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const closeConfig = {
  animation: "timing",
  config: {
    duration: 200,
    easing: Easing.linear,
  },
};

function NavigationTransitionStack1() {
  return (
    // https://reactnavigation.org/docs/stack-navigator/#transitionspec
    //https://reactnavigation.org/docs/stack-navigator/#animations
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "vertical", // vertical || horizontal
        transitionSpec: { open: openConfig, close: closeConfig },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // There are other methods too
        headerMode: "float", // float || screen
      }}
    >
      <Stack.Screen
        name="NavigationTransition1"
        component={NavigationTransition1}
        options={{
          headerBackTitleVisible: false,
          title: "Custom Navigation Transition 1",
        }}
      />
      <Stack.Screen
        name="CustomNavigationTransition1Screen1"
        component={Screen1}
        options={{
          headerBackTitleVisible: false,
          title: "Screen 1",
        }}
      />
      <Stack.Screen
        name="CustomNavigationTransition1Screen2"
        component={Screen2}
        options={{
          headerBackTitleVisible: false,
          title: "Screen 2",
        }}
      />
      <Stack.Screen
        name="CustomNavigationTransition1Screen3"
        component={Screen3}
        options={{
          headerBackTitleVisible: false,
          title: "Screen 3",
        }}
      />
    </Stack.Navigator>
  );
}

export default NavigationTransitionStack1;
