import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

function CustomBottomTab3({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: "row", backgroundColor: "white" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const iconName =
          route.name === "Home"
            ? isFocused
              ? "home"
              : "home-outline"
            : route.name === "Settings"
            ? isFocused
              ? "settings"
              : "settings-outline"
            : isFocused
            ? "person"
            : "person-outline";

        const color = isFocused ? "#673ab7" : "#222";

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };
        if (route.name === "Settings") {
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                // elevation: 5,
                // shadowOffset: { height: 0, width: 0 },
                // shadowOpacity: 0.2,
                // shadowColor: "grey",
                // shadowRadius: 1,
              }}
              key={index}
            >
              <View
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 25,
                  marginTop: -45,
                  backgroundColor: "orange",
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 5,
                  borderColor: "white",
                }}
              >
                <Ionicons name={iconName} size={25} color={color} />
              </View>
              {/* <Text style={{ color: color }}>{label}</Text> */}
            </TouchableOpacity>
          );
        }

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            key={index}
          >
            <View style={{ height: 30, width: 30 }}>
              <Ionicons name={iconName} size={25} color={color} />
            </View>
            <Text style={{ color: color }}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default CustomBottomTab3;
