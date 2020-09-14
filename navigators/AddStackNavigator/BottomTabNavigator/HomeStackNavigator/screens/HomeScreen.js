import React from "react";
import { View, Text, Button, FlatList, Image } from "react-native";

import CardItem from "./components/CardItem";

import { connect } from "react-redux";

function HomeScreen(props) {
  console.log(props.listing);

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
      <Button
        title="Open Modal"
        onPress={() => props.navigation.navigate("Modal")}
      />
      <FlatList data={props.listing} renderItem={renderItem} />
    </View>
  );
}

const mapStateToProps = (state) => ({
  listing: state.listing,
});
export default connect(mapStateToProps)(HomeScreen);
