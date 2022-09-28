import React from "react";
import { Text, TouchableOpacity, StyleSheet, Image } from "react-native";

import { SharedElement } from "react-navigation-shared-element";

const RenderItem = ({ item: { id, title, desc, image }, onPress }) => {
  return (
    <TouchableOpacity style={styles.cardStyle} onPress={onPress}>
      <Text style={styles.titleText}>{title}</Text>
      <SharedElement id={id}>
        <Image source={image} style={styles.imageStyle} />
      </SharedElement>
      <Text style={styles.descText}>{desc}</Text>
    </TouchableOpacity>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  cardStyle: {
    margin: 10,
    padding: 10,
    justifyContent: "center",
    elevation: 1,
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "grey",
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  titleText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
    marginBottom: 10,
  },
  imageStyle: {
    width: "100%",
    height: 150,
  },
  descText: {
    fontSize: 14,
    color: "grey",
    marginTop: 10,
  },
});
