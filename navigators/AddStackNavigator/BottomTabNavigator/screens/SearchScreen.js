import React from "react";
import {View, Text, ScrollView, StyleSheet, Dimensions} from "react-native";
import {SearchBar} from "react-native-elements";
import CategoryCard from "../../components/CategoryCard";

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const categoryArr = [
    {image: require('../HomeStackNavigator/screens/assets/6.png'), name: "Electronics"},
    {image: require('../HomeStackNavigator/screens/assets/6.png'), name: "Electronics"},
    {image: require('../HomeStackNavigator/screens/assets/6.png'), name: "Electronics"},
    {image: require('../HomeStackNavigator/screens/assets/6.png'), name: "Electronics"},
    {image: require('../HomeStackNavigator/screens/assets/6.png'), name: "Electronics"},

];

function SearchScreen({navigation}) {
    const [value, setValue] = React.useState('');

    return (
        <View style={{marginBottom: 100, height: screenHeight}}>
            <ScrollView style={{backgroundColor: "#F6F7F7", paddingTop: 40, height: screenHeight}}>
                <View style={{
                    marginTop: 10, marginBottom: 10, marginLeft: "5%", width: "90%", backgroundColor: "#F6F7F7",
                    borderRadius: 25
                }}>
                    <SearchBar
                        placeholder="Search by Product, Category, Brand etc."
                        onChangeText={setValue}
                        value={value}
                        lightTheme={true}
                        containerStyle={{
                            backgroundColor: "white",
                            borderRadius: 25,
                            color: 'black',
                            shadowOpacity: 0.3
                        }}
                        inputContainerStyle={{backgroundColor: "white", height: 30}}
                        inputStyle={{fontSize: 16, color: 'black'}}
                    />
                </View>

                <View style={{width: "100%", flex: 1, backgroundColor: "#F6F7F7", paddingBottom: 10,}}>
                    <Text style={styles.categoryTitle}>Top Categories</Text>
                    <ScrollView horizontal={true} style={styles.horizontalScrollView}>
                        {
                            categoryArr.map((item, i) => (
                                <CategoryCard
                                    key={i}
                                    navigation={navigation}
                                    category={item}
                                />
                            ))
                        }
                    </ScrollView>


                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    categoryTitle: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        fontSize: 16,
        fontWeight: "600",
        color: '#676767'
    },
    horizontalScrollView: {
        marginHorizontal: 16
    }
});

export default SearchScreen;
