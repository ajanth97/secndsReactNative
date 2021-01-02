import React from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet} from "react-native";

export default function SmallProductCard({ navigation, product }) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Product")}>
            <Image style={styles.image} source={product.url}/>
            <View style={styles.priceLabelView}>
                <Text style={styles.priceText}>LKR {product.price}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 110,
        height: 80,
        borderRadius: 5,
        shadowOpacity: 1,
        marginHorizontal: 5
    },
    priceLabelView: {
        top: -18,
        left: 9,
        backgroundColor:"white",
        width: 75,
        borderRadius: 3,
        opacity:0.9
    },
    priceText: {
        paddingLeft: 10,
        color: "#fe7571",
        fontSize: 12,
        fontWeight:"bold"
    }
});
