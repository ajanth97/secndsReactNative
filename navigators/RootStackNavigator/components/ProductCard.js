import React from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet} from "react-native";

export default function ProductCard({ navigation, product }) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Product", {listingId: product.id})}>
            <View style={styles.container}>
                <Image style={styles.image} source={product.url}/>
                <Text style={styles.brand}>{product.brand}</Text>
                <Text style={styles.itemName}>{product.name}</Text>
                <Text style={styles.price}>LKR {product.price}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 110,
        height: 110,
        borderRadius: 5,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        shadowOpacity: 1,
    },
    price: {
        fontWeight: 'bold',
        paddingBottom: 10,
        paddingTop: 3,
        fontSize: 12,
        color:"#fe7571",
        opacity:1
    },
    container: {
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
    brand: {
        color: "grey",
        marginTop: 5
    },
    itemName: {
        fontSize: 14,
        fontWeight: "500"
    },
});
