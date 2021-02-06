import React from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet} from "react-native";

export default function CategoryCard({ navigation, category }) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <View style={styles.categoryCardView}>
                <Image style={styles.categoryImage}
                       source={category.image}/>
                <Text style={styles.categoryText}>{category.name}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    categoryCardView: {
        marginVertical: 10,
        marginHorizontal: 5,
        alignItems: "center",
        backgroundColor: 'white',
        // borderRadius: 5,
        // shadowColor: "black",
        // shadowOffset: {width: 1, height: 1},
        // shadowOpacity: 0.2
    },
    categoryImage: {
        width: 140,
        height: 140,
        borderRadius: 5,
        shadowOpacity: 1,
    },
    categoryText: {
        color: "black",
        marginVertical: 7
    }
});
