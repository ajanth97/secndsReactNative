import React from "react";
import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { isLoaded, isEmpty } from "react-redux-firebase";

import CardItem from "./components/CardItem";

export default function HomeScreen(props) {
  useFirestoreConnect(["listings"]);
  const listings = useSelector((state) => state.firestore.data.listings);

  const renderItem = ({ item }) => (
    <CardItem
      navigation={props.navigation}
      content={{
        title: item.title,
        seller: item.seller,
        sellerThumbnail: item.sellerThumbnail,
        itemImage: item.itemImage,
      }}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      {!isLoaded(listings) ? (
        <Text>Loading... </Text>
      ) : isEmpty(listings) ? (
        <Text>No items</Text>
      ) : (
        <FlatList
          data={Object.values(listings)}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
}
