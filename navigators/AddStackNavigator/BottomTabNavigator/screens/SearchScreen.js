import React from "react";
import {View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, Dimensions} from "react-native";
import {SearchBar} from "react-native-elements";

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

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
                        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                            <View style={styles.categoryCardView}>
                                <Image style={styles.categoryImage}
                                       source={require('../HomeStackNavigator/screens/assets/6.png')}/>
                                <Text style={styles.categoryText}>Accessories</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                            <View style={styles.categoryCardView}>
                                <Image style={styles.categoryImage}
                                       source={require('../HomeStackNavigator/screens/assets/6.png')}/>
                                <Text style={styles.categoryText}>Accessories</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>

                    <ScrollView horizontal={true} style={styles.horizontalScrollView}>
                        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                            <View style={styles.categoryCardView}>
                                <Image style={styles.categoryImage}
                                       source={require('../HomeStackNavigator/screens/assets/6.png')}/>
                                <Text style={styles.categoryText}>Accessories</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                            <View style={styles.categoryCardView}>
                                <Image style={styles.categoryImage}
                                       source={require('../HomeStackNavigator/screens/assets/6.png')}/>
                                <Text style={styles.categoryText}>Accessories</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>

                    <ScrollView horizontal={true} style={styles.horizontalScrollView}>
                        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                            <View style={styles.categoryCardView}>
                                <Image style={styles.categoryImage}
                                       source={require('../HomeStackNavigator/screens/assets/6.png')}/>
                                <Text style={styles.categoryText}>Accessories</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                            <View style={styles.categoryCardView}>
                                <Image style={styles.categoryImage}
                                       source={require('../HomeStackNavigator/screens/assets/6.png')}/>
                                <Text style={styles.categoryText}>Accessories</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>

                    <ScrollView horizontal={true} style={styles.horizontalScrollView}>
                        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                            <View style={styles.categoryCardView}>
                                <Image style={styles.categoryImage}
                                       source={require('../HomeStackNavigator/screens/assets/6.png')}/>
                                <Text style={styles.categoryText}>Accessories</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                            <View style={styles.categoryCardView}>
                                <Image style={styles.categoryImage}
                                       source={require('../HomeStackNavigator/screens/assets/6.png')}/>
                                <Text style={styles.categoryText}>Accessories</Text>
                            </View>
                        </TouchableOpacity>
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
    },
    categoryCardView: {
        marginVertical: 10,
        marginHorizontal: 10,
        alignItems: "center",
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: "black",
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.2
    },
    categoryImage: {
        width: 170,
        height: 120,
        borderRadius: 5,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        shadowOpacity: 1,
    },
    categoryText: {
        color: "#676767",
        marginVertical: 7
    }
});

export default SearchScreen;
