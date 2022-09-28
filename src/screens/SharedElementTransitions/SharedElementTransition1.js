import React from "react";
import { FlatList } from "react-native";

import RenderItem from "./components/RenderItem";

const SharedElementTransition1 = ({ navigation }) => {
  const data = [
    {
      id: 1,
      title: "Update 0.4.0.65 (Server update 27.09.2022 - Xbox, PlayStation®)",
      desc: "The current provided changelog reflects the major changes within the game as part of this Update. Some updates, additions and fixes may not be listed in the provided notes. Enlisted is constantly improving and specific fixes may be implemented without the client being updated.",
      image: require("../../../assets/news1.jpeg"),
    },
    {
      id: 2,
      title: "DDoS attack on the server",
      desc: "Dear players. From September 24th we have been facing prolonged DDoS attacks on our servers. As a result, some of you may experience problems with the availability of the game and other game services. We are aware of the problem, our specialists are promptly switching the load to other data centres to stabilise the situation.",
      image: require("../../../assets/news2.jpeg"),
    },
    {
      id: 3,
      title: "Pacific levels",
      desc: "The Battle of the Pacific greets you with lots of new weapons, equipment, and squads. There are 26 levels for both the new Japanese army and the US. Those of you already familiar with the US army in Enlisted will be happy to see some familiar and unique weapons too.",
      image: require("../../../assets/news3.jpeg"),
    },
    {
      id: 4,
      title: "Huge Effect Update",
      desc: "Dear players. From September 24th we have been facing prolonged DDoS attacks on our servers. As a result, some of you may experience problems with the availability of the game and other game services. We are aware of the problem, our specialists are promptly switching the load to other data centres to stabilise the situation.",
      image: require("../../../assets/news4.jpeg"),
    },
  ];

  const onPressItem = (item) => {
    navigation.navigate("SharedElementTransition1Details", { item });
  };

  const renderItem = ({ item }) => {
    return <RenderItem item={item} onPress={onPressItem.bind(this, item)} />;
  };

  return <FlatList data={data} renderItem={renderItem} />;
};

export default SharedElementTransition1;
