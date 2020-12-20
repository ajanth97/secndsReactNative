import React from "react";
import {ScrollView, StyleSheet, Image, View, Text, Dimensions} from "react-native";
import {useSelector} from "react-redux";
import {useFirestoreConnect, isLoaded, isEmpty} from "react-redux-firebase";
import {Badge} from 'react-native-elements';
import ImageSlider from 'react-native-image-slider';
import SmallProductCard from "../../../components/SmallProductCard";
import ProductCard from "../../../components/ProductCard";

const recommendedArr = [
    {url: require("./assets/6.png"), price: "1100"},
    {url: require("./assets/6.png"), price: "1200"},
    {url: require("./assets/6.png"), price: "1300"},
    {url: require("./assets/6.png"), price: "1400"},
    {url: require("./assets/6.png"), price: "1500"}
];

const electronicsArr = [
    {url: require("./assets/6.png"), price: "1000", brand: "Ray-ban", name: "Sunglass"},
    {url: require("./assets/6.png"), price: "1100", brand: "Ray-ban", name: "Sunglass"},
    {url: require("./assets/6.png"), price: "1200", brand: "Ray-ban", name: "Sunglass"},
    {url: require("./assets/6.png"), price: "1300", brand: "Ray-ban", name: "Sunglass"},
    {url: require("./assets/6.png"), price: "1400", brand: "Ray-ban", name: "Sunglass"}
];

function NewHomeScreen({navigation}) {
    useFirestoreConnect(["listings"]);
    const listings = useSelector((state) => state.firestore.data.listings);

    const windowHeight = Dimensions.get('window').height;
    const windowWidth = Dimensions.get('window').width;

    const images = [
        "https://digistatement.com/wp-content/uploads/2020/03/rsz_new-apple-macbook-pro-2020-700x375.jpg",
        "https://cdn.pocket-lint.com/r/s/970x/assets/images/152137-laptops-review-apple-macbook-pro-2020-review-image1-pbzm4ejvvs-jpg.webp",
        "https://digistatement.com/wp-content/uploads/2020/03/rsz_new-apple-macbook-pro-2020-700x375.jpg",
        "https://cdn.pocket-lint.com/r/s/970x/assets/images/152137-laptops-review-apple-macbook-pro-2020-review-image1-pbzm4ejvvs-jpg.webp"
    ];

    return (
        <View style={{backgroundColor: "#F6F7F7", paddingTop: 50, height: windowHeight}}>
            <View style={{flex: 1, alignItems: "center", backgroundColor: "#F6F7F7", paddingBottom: 50}}>
                <Image style={{width: 240, height: 50}} source={require('./assets/homeLogo.png')}/>
            </View>
            <ScrollView style={{backgroundColor: "#F6F7F7"}}>
                {!isLoaded(listings) ? (
                        <Text>Loading... </Text>

                    )

                    : isEmpty(listings) ? (
                        <Text>No items</Text>
                    ) : (
                        <View style={{flex: 1, alignItems: "center", backgroundColor: "#F6F7F7", paddingBottom: 100}}>
                            <View style={styles.sliderContainer}>
                                <ImageSlider images={images}/>
                            </View>

                            <View style={{width: "100%", flex: 1, backgroundColor: "#F6F7F7", paddingBottom: 10}}>
                                <Text style={styles.categoryTitle}>Recommended for you</Text>
                                <ScrollView horizontal={true} style={{marginHorizontal: 5}}>
                                    {
                                        recommendedArr.map((item, i) => (
                                            <SmallProductCard
                                                key={i}
                                                navigation={navigation}
                                                product={item}
                                            />
                                        ))
                                    }
                                </ScrollView>
                            </View>
                            <View style={{width: "100%", flex: 1, backgroundColor: "#F6F7F7", paddingBottom: 10}}>
                                <Text style={styles.categoryTitle}>
                                    Deals in Electronics</Text>
                                <View style={{flexDirection: "row", marginHorizontal: 10}}>
                                    <Badge value={<Text style={styles.dealCategoryName}>Mobile</Text>}
                                           badgeStyle={styles.dealCategory}/>
                                    <Badge containerStyle={styles.dealCategoryContainer}
                                           value={<Text style={styles.dealCategoryName}>TV</Text>}
                                           badgeStyle={styles.dealCategory}/>
                                    <Badge containerStyle={styles.dealCategoryContainer}
                                           value={<Text style={styles.dealCategoryName}>Computer</Text>}
                                           badgeStyle={styles.dealCategory}/>
                                    <Badge containerStyle={styles.dealCategoryContainer}
                                           value={<Text style={styles.dealCategoryName}>Gaming</Text>}
                                           badgeStyle={styles.dealCategory}/>
                                    <Text style={styles.dealCategorySeeAll}>See All</Text>
                                </View>

                                <ScrollView horizontal={true} style={{marginTop: 10}}>
                                    {

                                        Object.values(listings).map((item) => (
                                            <ProductCard
                                                key={item.id}
                                                navigation={navigation}
                                                product={item}
                                            />
                                        ))
                                    }
                                </ScrollView>
                            </View>

                            <View style={{width: "100%", flex: 1, backgroundColor: "#F6F7F7", paddingBottom: 10}}>
                                <Text style={styles.categoryTitle}>
                                    Deals in Furniture</Text>
                                <View style={{width: "100%", flexDirection: "row", marginHorizontal: 10}}>
                                    <Badge value={<Text style={styles.dealCategoryName}>Mobile</Text>}
                                           badgeStyle={styles.dealCategory}/>
                                    <Badge containerStyle={styles.dealCategoryContainer}
                                           value={<Text style={styles.dealCategoryName}>TV</Text>}
                                           badgeStyle={styles.dealCategory}/>
                                    <Badge containerStyle={styles.dealCategoryContainer}
                                           value={<Text style={styles.dealCategoryName}>Computer</Text>}
                                           badgeStyle={styles.dealCategory}/>
                                    <Badge containerStyle={styles.dealCategoryContainer}
                                           value={<Text style={styles.dealCategoryName}>Gaming</Text>}
                                           badgeStyle={styles.dealCategory}/>
                                    <Text style={styles.dealCategorySeeAll}>See All</Text>
                                </View>

                                <ScrollView horizontal={true} style={{marginTop: 10}}>
                                    {
                                        electronicsArr.map((item, i) => (
                                            <ProductCard
                                                key={i}
                                                navigation={navigation}
                                                product={item}
                                            />
                                        ))
                                    }
                                </ScrollView>
                            </View>
                        </View>)}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    sliderContainer: {
        backgroundColor: '#fff',
        width: "100%",
        marginTop: 20,
        height: 200
    },
    categoryTitle: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        fontSize: 16,
        fontWeight: "600",
        color: "black"
    },
    dealImage: {
        width: 110,
        height: 80,
        borderRadius: 5,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        shadowOpacity: 1,
    },
    dealPrice: {
        fontWeight: 'bold',
        paddingBottom: 10,
        paddingTop: 3,
        fontSize: 12
    },
    dealContainer: {
        marginLeft: 11,
        marginBottom: 10,
        marginTop: 10,
        alignItems: "center",
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: "black",
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.2
    },
    dealBrand: {
        color: "grey",
        marginTop: 5
    },
    dealItemName: {
        fontSize: 14
    },
    dealCategory: {
        backgroundColor: "lightgrey",
        paddingVertical: 3,
        paddingHorizontal: 6,
        height: 30
    },
    dealCategoryName: {
        color: "black"
    },
    dealCategorySeeAll: {
        marginTop: 5,
        marginLeft: 30,
        fontSize: 15,
        color: "#676767",
        right: 0
    },
    dealCategoryContainer: {
        marginLeft: 5
    },
    recommendedImage: {
        width: 110,
        height: 80,
        borderRadius: 5,
        shadowOpacity: 1,
        marginHorizontal: 5
    },
    recommendedPriceLabelView: {
        top: -18,
        left: 9,
        backgroundColor: "black",
        width: 75,
        opacity: 0.7
    },
    recommendedPriceText: {
        paddingLeft: 10,
        color: "white",
        fontSize: 12
    }
});

export default NewHomeScreen;
