import React from "react";

import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import SharedElementTransition1 from "../screens/SharedElementTransitions/SharedElementTransition1";
import SharedElementTransition1Details from "../screens/SharedElementTransitions/components/SharedElementTransition1Details";

const Stack = createSharedElementStackNavigator();

const SharedElementTransitionStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: ({ current, next, index, closing, layouts }) => {
          return {
            cardStyle: {
              opacity: current.progress,
            },
          };
        },
      }}
    >
      <Stack.Screen
        name="SharedElementTransition1"
        component={SharedElementTransition1}
      />
      <Stack.Screen
        name="SharedElementTransition1Details"
        component={SharedElementTransition1Details}
        sharedElements={(route, otherRoute, showing) => {
          const { item } = route.params;
          return [{ id: item.id, animation: "fade" }];
        }}
      />
    </Stack.Navigator>
  );
};

export default SharedElementTransitionStack;
