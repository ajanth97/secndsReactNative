import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

function DetailsScreen({ route }) {
  const { title } = route.params;
  const { seller } = route.params;
  const { itemImage } = route.params;
  const { sellerThumbnail } = route.params;

  return (
    <ScrollView alwaysBounceHorizontal={false} style={{ flex: 1 }}>
      <Text style={{ fontSize: 40 }}>{title}</Text>
      <Text style={{ fontSize: 20 }}>{seller}</Text>

      <Image
        source={{
          uri: itemImage,
        }}
        style={{ height: 200, width: 360, flex: 0 }}
      />
      <Image
        source={{
          uri: sellerThumbnail,
        }}
        style={{ height: 100, width: 100, flex: 0 }}
      />
    </ScrollView>
  );
}

export default DetailsScreen;
