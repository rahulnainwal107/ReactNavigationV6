import * as React from "react";

import { createStackNavigator, TransitionSpecs } from "@react-navigation/stack";

import NavigationTransition2 from "../screens/NavigationTransitions/NavigationTransition2";
import Screen1 from "../screens/BottomTabs/components/Screen1";
import Screen2 from "../screens/BottomTabs/components/Screen2";
import Screen3 from "../screens/BottomTabs/components/Screen3";

const Stack = createStackNavigator();

const customTransition = {
  gestureEnabled: true,
  gestureDirection: "vertical",
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  cardStyleInterpolator: ({ current, next, index, closing, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
          {
            rotate: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: ["108deg", "0deg"],
            }),
          },
          {
            scale: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 2],
                })
              : 1,
          },
        ],
      },
    };
  },
};

function NavigationTransitionStack2() {
  return (
    // https://reactnavigation.org/docs/stack-navigator/#transitionspec
    //https://reactnavigation.org/docs/stack-navigator/#animations
    <Stack.Navigator
      screenOptions={{
        // gestureEnabled: true,
        // gestureDirection: "vertical", // vertical || horizontal
        // transitionSpec: { open: openConfig, close: closeConfig },
        // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // There are other methods too
        // headerMode: "float", // float || screen
        ...customTransition,
      }}
    >
      <Stack.Screen
        name="NavigationTransition2"
        component={NavigationTransition2}
        options={{
          headerBackTitleVisible: false,
          title: "Custom Navigation Transition 2",
        }}
      />
      <Stack.Screen
        name="CustomNavigationTransition2Screen1"
        component={Screen1}
        options={{
          headerBackTitleVisible: false,
          title: "Screen 1",
        }}
      />
      <Stack.Screen
        name="CustomNavigationTransition2Screen2"
        component={Screen2}
        options={{
          headerBackTitleVisible: false,
          title: "Screen 2",
        }}
      />
      <Stack.Screen
        name="CustomNavigationTransition2Screen3"
        component={Screen3}
        options={{
          headerBackTitleVisible: false,
          title: "Screen 3",
        }}
      />
    </Stack.Navigator>
  );
}

export default NavigationTransitionStack2;
