import React from "react";
import { Image } from "react-native";

import {
  Card,
  CardItem,
  Thumbnail,
  Left,
  Body,
  Text,
  Button,
  Icon,
  Right,
  Container,
} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

function Cards({ navigation, content }) {
  return (
    <Container style={{ padding: 10 }}>
      <TouchableOpacity onPress={() => navigation.navigate("Details", content)}>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail
                source={{
                  uri: content.sellerThumbnail,
                }}
              />
              <Body>
                <Text>{content.title}</Text>
                <Text note>{content.seller}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{
                uri: content.itemImage,
              }}
              style={{ height: 200, width: null, flex: 1 }}
            />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
        </Card>
      </TouchableOpacity>
    </Container>
  );
}

export default Cards;
