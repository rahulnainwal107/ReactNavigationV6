import React from "react";
import { View, Linking, Image, Text, SafeAreaView } from "react-native";

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";

function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 10,
          backgroundColor: "white",
        }}
      >
        <Image
          source={require("../../assets/user.png")}
          style={{ height: 100, width: 100, borderRadius: 50 }}
        />
        <Text style={{ size: 18, fontWeight: "500", marginTop: 10 }}>
          Rahul Nainwal
        </Text>
      </View>
      <DrawerContentScrollView
        {...props}
        style={{ backgroundColor: "rgba(126, 251, 233, 0.8)" }}
      >
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <DrawerItem
        label="Help"
        onPress={() => Linking.openURL("https://mywebsite.com/help")}
        icon={({ focused, color, size }) => (
          <Ionicons
            name={focused ? "help-circle" : "help-circle-outline"}
            color={color}
            size={size}
          />
        )}
      />
    </SafeAreaView>
  );
}

export default CustomDrawerContent;
