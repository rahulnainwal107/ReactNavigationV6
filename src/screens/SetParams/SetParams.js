/**
 * // https://reactnavigation.org/docs/navigation-prop/#setparams
 */

import React from "react";
import { View, Text } from "react-native";

const SetParams = ({
  navigation,
  route: { params: { userName, fromScreen } = {} },
}) => {
  return (
    <View>
      <Text>User name - {userName}</Text>
      <Text>From screen - {fromScreen}</Text>

      {fromScreen !== "Setparams" && (
        <Text
          style={{ alignSelf: "center" }}
          onPress={() =>
            navigation.setParams({
              userName: "Rnainwal",
              fromScreen: "Setparams",
            })
          }
        >
          Set new params
        </Text>
      )}
    </View>
  );
};

export default SetParams;
