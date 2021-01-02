import React from "react";
import {View, Text, ScrollView, StyleSheet, Dimensions} from "react-native";
import {Badge, SearchBar} from "react-native-elements";
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
            <ScrollView style={{backgroundColor: "white", paddingTop: 40, height: screenHeight}}>
                <View style={{
                    marginTop: 10, marginBottom: 10, marginLeft: "3%", width: "94%", backgroundColor: "white"
                }}>
                    <SearchBar
                        placeholder="Search by Product, Category, Brand etc."
                        onChangeText={setValue}
                        value={value}
                        lightTheme={true}
                        containerStyle={{
                            backgroundColor: "white",
                            borderRadius: 10,
                            color: 'black',
                            shadowOpacity: 0.3
                        }}
                        inputContainerStyle={{backgroundColor: "white", height: 30}}
                        inputStyle={{fontSize: 16, color: 'black'}}
                    />
                </View>

                <View style={{width: "100%", flex: 1, backgroundColor: "white", paddingBottom: 10,}}>
                    <Text style={styles.categoryTitle}>Quick Search</Text>
                    <View style={{width: "100%", flexDirection: "row", marginHorizontal: 20, marginVertical:5}}>
                        <Badge value={<Text style={styles.dealCategoryName}>iPhone11</Text>}
                               badgeStyle={styles.dealCategory}/>
                        <Badge containerStyle={styles.dealCategoryContainer}
                               value={<Text style={styles.dealCategoryName}>Nike Air Jordans</Text>}
                               badgeStyle={styles.dealCategory}/>
                        <Badge containerStyle={styles.dealCategoryContainer}
                               value={<Text style={styles.dealCategoryName}>Funkopop</Text>}
                               badgeStyle={styles.dealCategory}/>
                    </View>
                    <View style={{width: "100%", flexDirection: "row", marginHorizontal: 20, marginVertical:5}}>
                        <Badge value={<Text style={styles.dealCategoryName}>Vaccum Cleaner</Text>}
                               badgeStyle={styles.dealCategory}/>
                        <Badge containerStyle={styles.dealCategoryContainer}
                               value={<Text style={styles.dealCategoryName}>Mugs</Text>}
                               badgeStyle={styles.dealCategory}/>
                        <Badge containerStyle={styles.dealCategoryContainer}
                               value={<Text style={styles.dealCategoryName}>Wall Decar</Text>}
                               badgeStyle={styles.dealCategory}/>
                    </View>
                    <View style={{width: "100%", flexDirection: "row", marginHorizontal: 20, marginVertical:5}}>
                        <Badge value={<Text style={styles.dealCategoryName}>iPhone11</Text>}
                               badgeStyle={styles.dealCategory}/>
                        <Badge containerStyle={styles.dealCategoryContainer}
                               value={<Text style={styles.dealCategoryName}>Nike Air Jordans</Text>}
                               badgeStyle={styles.dealCategory}/>
                        <Badge containerStyle={styles.dealCategoryContainer}
                               value={<Text style={styles.dealCategoryName}>Funkopop</Text>}
                               badgeStyle={styles.dealCategory}/>
                    </View>
                    <View style={{flexDirection:"row", width:"90%", marginTop:10}}>
                        <Text style={styles.categoryTitle}>Categories</Text>
                        <Text style={styles.categoryTitleSeeAll}>See all ></Text>
                    </View>

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
                    <View style={{flexDirection:"row", width:"90%"}}>
                        <Text style={styles.categoryTitle}>Brands</Text>
                        <Text style={styles.categoryTitleSeeAll}>See all ></Text>
                    </View>
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
        paddingVertical: 5,
        fontSize: 16,
        fontWeight: "600",
        color: 'black',
        marginLeft:20,
        width:"80%"
    },
    categoryTitleSeeAll: {
        paddingVertical: 5,
        fontSize: 14,
        fontWeight: "600",
        color: 'grey',
        alignSelf:"flex-end"

    },
    horizontalScrollView: {
        marginHorizontal: 10
    },
    dealCategory: {
        backgroundColor: "#4f3098",
        paddingVertical: 3,
        paddingHorizontal: 10,
        height: 30,
        marginHorizontal: 5
    },
    dealCategoryName: {
        color: "white"
    },
});

export default SearchScreen;
