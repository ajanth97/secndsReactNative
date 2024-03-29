import React from "react";
import {View, Text, Dimensions, ScrollView, Image, StyleSheet, TouchableOpacity} from "react-native";
import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from 'react-redux';
import ImageSlider from 'react-native-image-slider';
import {Avatar, Button} from "react-native-elements";

export default function ViewProduct({navigation, route}) {
    const listingId =  route.params.listingId
    useFirestoreConnect([
        {
          collection: 'listings',
          doc: listingId
        }
      ])     
      const listing = useSelector(
        ({ firestore: { data } }) => data.listings && data.listings[listingId]
      )
    console.log(listing)  
    const windowHeight = Dimensions.get('window').height;
    

    const images = listing.listingImages    

    return (
        <View style={{backgroundColor: "#F6F7F7", height: windowHeight}}>
            <ScrollView style={{backgroundColor: "#F6F7F7"}}>
                <View style={{flex: 1, alignItems: "center", backgroundColor: "#F6F7F7"}}>
                    <View style={styles.imageSlider}>
                        <ImageSlider images={images}/>
                    </View>
                </View>
                <View style={{flexDirection: "row", marginTop: 10}}>
                    <View style={{marginLeft: 30, marginTop: 5, width: "60%"}}>
                        <Text style={styles.brandNameText}>Apple</Text>
                        <Text style={styles.itemNameText}>{listing.title}</Text>
                        <Text style={styles.itemPriceText}>{listing.price}</Text>
                    </View>
                    <Avatar
                        rounded
                        size="medium"
                        icon={{name: 'share-square-o', type: 'font-awesome', color: "black"}}
                        onPress={() => console.log("Share Button Pressed!")}
                        activeOpacity={0.7}
                        containerStyle={{backgroundColor: 'white', shadowOpacity: 0.3}}
                    />
                    <Avatar
                        rounded
                        size="medium"
                        icon={{name: 'heart-o', type: 'font-awesome', color: "black"}}
                        onPress={() => console.log("Favourite Btn Clicked!")}
                        activeOpacity={0.7}
                        containerStyle={{marginLeft: 10, backgroundColor: 'white', shadowOpacity: 0.3}}
                    />
                </View>

                <View style={{flexDirection: "row", marginTop: 1, alignSelf: "center", marginBottom: 20}}>
                    <Button title={"Buy Now"} buttonStyle={{backgroundColor: "black"}}
                            containerStyle={{marginTop: 20, width: "50%", marginRight: "8%"}}/>
                    <Button title={"Make a Bid"} buttonStyle={{backgroundColor: "black"}}
                            containerStyle={{marginTop: 20, width: "32%"}}/>
                </View>

                <View style={styles.descriptionTagContainer}>
                    <Text style={styles.descriptionTag}>Condition:</Text>
                    <Text style={styles.descriptionValue}>Good condition</Text>
                </View>

                <View style={styles.descriptionTagContainer}>
                    <Text style={{fontSize: 14, color: "#676767"}}>Description:</Text>
                    <View style={{height: 100}}>
                        <Text style={styles.descriptionValue}>{listing.description}</Text>
                    </View>
                </View>

                <View>
                    <Text style={styles.categoryScrollTitle}>Similar Items</Text>
                    <ScrollView horizontal={true}>
                        <TouchableOpacity>
                            <View style={styles.scrollItemContainer}>
                                <Image style={styles.scrollItemImage} source={require('./assets/6.png')}/>
                                <Text style={styles.scrollItemBrand}>Ray-ban</Text>
                                <Text style={styles.scrollItemName}>Sunglass </Text>
                                <Text style={styles.scrollItemPrice}>LKR 1,000</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.scrollItemContainer}>
                                <Image style={styles.scrollItemImage} source={require('./assets/6.png')}/>
                                <Text style={styles.scrollItemBrand}>Ray-ban</Text>
                                <Text style={styles.scrollItemName}>Sunglass </Text>
                                <Text style={styles.scrollItemPrice}>LKR 1,000</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.scrollItemContainer}>
                                <Image style={styles.scrollItemImage} source={require('./assets/6.png')}/>
                                <Text style={styles.scrollItemBrand}>Ray-ban</Text>
                                <Text style={styles.scrollItemName}>Sunglass </Text>
                                <Text style={styles.scrollItemPrice}>LKR 1,000</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    imageSlider: {
        backgroundColor: '#fff',
        width: "100%",
        height: 230
    },
    categoryScrollTitle: {
        marginTop: -50,
        paddingHorizontal: 15,
        paddingVertical: 15,
        fontSize: 16,
        fontWeight: "600",
        color: "black",
        paddingTop: 0
    },
    brandNameText: {
        fontSize: 24,
        color: "#676767"
    },
    itemNameText: {
        fontSize: 20,
        marginTop: 5,
        color: "black"
    },
    itemPriceText: {
        fontSize: 17,
        marginTop: 5,
        color: "black",
        fontWeight: "bold"
    },
    descriptionTagContainer: {
        flexDirection: "row",
        marginLeft: 30,
        marginTop: 15
    },
    descriptionTag: {
        fontSize: 14,
        color: "#676767"
    },
    descriptionValue: {
        fontSize: 14,
        color: "black",
        marginLeft: 15
    },
    scrollItemContainer: {
        marginLeft: 10,
        marginBottom: 10,
        alignItems: "center",
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: "black",
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.2
    },
    scrollItemImage: {
        width: 110,
        height: 80,
        borderRadius: 5,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        shadowOpacity: 1,
    },
    scrollItemBrand: {
        color: "grey", marginTop: 5
    },
    scrollItemName: {
        fontSize: 14
    },
    scrollItemPrice: {
        fontWeight: 'bold',
        paddingBottom: 10,
        paddingTop: 3,
        fontSize: 12
    }
});
