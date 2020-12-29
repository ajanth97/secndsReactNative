import React from "react";
import { View, Text, Image } from "react-native";
import { Card } from "@ui-kitten/components";

export default function CardItem({ navigation, content }) {
  return (
    <View style={{ padding: 10 }}>
      <Card onPress={() => navigation.navigate("Details", content)}>
        <View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 30 }}>{content.title}</Text>
          </View>
          <View style={{ marginTop: 15 }}>
            <Image
              style={{ height: 175, width: 300 }}
              source={{
                uri: content.itemImage,
              }}
            />
          </View>
          <View style={{ paddingTop: 10 }}>
            <Text style={{ fontSize: 20 }}>Body</Text>
          </View>
        </View>
      </Card>
    </View>
  );
}
