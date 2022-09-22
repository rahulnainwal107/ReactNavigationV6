import * as React from "react";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { Easing } from "react-native-reanimated";

import NavigationTransitions from "../screens/NavigationTransitions/NavigationTransitions";
import NavigationTransitionStack1 from "./NavigationTransitionStack1";
import NavigationTransitionStack2 from "./NavigationTransitionStack2";

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

function NavigationTransitionStack() {
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
        name="NavigationTransitions"
        component={NavigationTransitions}
        options={{
          headerBackTitleVisible: false,
          title: "Custom Navigation Transitions",
        }}
      />
      <Stack.Screen
        name="NavigationTransitionStack1"
        component={NavigationTransitionStack1}
        options={{
          headerShown: false,
          headerBackTitleVisible: false,
          title: "Custom Navigation Transition 1",
        }}
      />
      <Stack.Screen
        name="NavigationTransitionStack2"
        component={NavigationTransitionStack2}
        options={{
          headerShown: false,
          headerBackTitleVisible: false,
          title: "Custom Navigation Transition 2",
        }}
      />
    </Stack.Navigator>
  );
}

export default NavigationTransitionStack;
