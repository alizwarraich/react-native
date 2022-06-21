import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Dimensions, Text, View, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Categories from '../components/categories';
import RestaurantItems from '../components/restaurantItems';
import BottomTabs from '../components/bottomtabs';
import { Divider } from 'react-native-paper';

const colorScheme = {
    brown: '#C6742E', blue: '#6DC8E8', red: '#D4263F', orange: '#F18933',
    marone: '8C162E', yellow: 'F8AD3E', purple: '342649', lightpurple: 'CDCAE1', greyishpurple: '81829E'
    , cl1: '#55477E', cl2: '#5A4B87', cl3: '#7B61C1'
};

const windowWidth = Dimensions.get('window').width;

export default function Restaurants({ navigation, route }) {
    const [activeButton, activateButton] = useState(0);
    function checkActiveButton(j) {
        if (activeButton == j) {
            return true;
        }
        return false;
    }
    return (
        <SafeAreaView style={styles.container}>
            {/* Delivery and Pcikup Buttons */}
            <View style={styles.headerbuttons}>
                <TouchableOpacity onPress={() => activateButton(0)} style={checkActiveButton(0) ? styles.activebutton : styles.button}><Text style={checkActiveButton(0) ? styles.activebuttontext : styles.buttontext}>Delivery</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => activateButton(1)} style={checkActiveButton(1) ? styles.activebutton : styles.button}><Text style={checkActiveButton(1) ? styles.activebuttontext : styles.buttontext}>Pickup</Text></TouchableOpacity>
            </View>

            {/* Search bar */}
            <View style={styles.search}>
                <GooglePlacesAutocomplete
                    query={{ key: 'AIzaSyCSWIgeYITb8iY4QS2dchDDO5oB3D4jeHE' }}
                    placeholder='Search'
                    onPress={(data) => {
                        data.description = route.params.location
                    }}
                    styles={{
                        textInput: {
                            // marginHorizontal: 20,
                            borderRadius: 20,
                            backgroundColor: '#eee',
                            // marginBottom: 20,
                            marginTop: 7,
                            fontWeight: '700',
                        },
                        textInputContainer: {
                            marginHorizontal: 20,
                            borderRadius: 50,
                            backgroundColor: '#eee',
                            marginBottom: 20,
                            marginRight: 30,
                            alignItems: 'center',
                            fontWeight: '700',
                        },
                    }}
                    renderLeftButton={() => (
                        <View style={{ marginLeft: 10 }}>
                            <Ionicons name='location-sharp' size={24} />
                        </View>
                    )}
                    renderRightButton={() => (
                        <View style={styles.searchoption}>
                            <AntDesign style={{ marginTop: 3, marginRight: 5 }} name='clockcircle' size={15} />
                            <Text>Search</Text>
                        </View>
                    )}
                />
            </View>

            <View style={styles.categories}>
                <Categories />
                <RestaurantItems navigation={navigation} />
                <Divider />
                {/* <BottomTabs /> */}
            </View>

            {/* Bottom Tabs */}
            {/* <View style={styles.bottomtabs}>
                <Icon name="home" text="Home" />
                <Icon name="search" text="Browse" />
                <Icon name="shopping-bag" text="Grocery" />
                <Icon name="receipt" text="Orders" />
                <Icon name="user" text="Account" />
            </View> */}
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 31,
    },
    headerbuttons: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#fff',
        width: windowWidth,
        // marginTop: 10,
    },
    activebutton: {
        backgroundColor: 'black',
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
    },
    activebuttontext: {
        color: 'white',
        fontSize: 15,
        fontWeight: '900',
    },
    button: {
        // backgroundColor: 'white',
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
    },
    buttontext: {
        color: 'black',
        fontSize: 15,
        fontWeight: '900',
    },
    search: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: windowWidth,
        marginBottom: -47,
    },
    searchoption: {
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
    },
    categories: {
        // backgroundColor: '#ecf0f1',
        padding: 8,
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        // marginTop: 10,
    },
    // bottomtabs: {
    //     flex: 1,
    //     flexDirection: 'row',
    //     backgroundColor: '#fff',
    //     justifyContent: 'space-around',
    //     alignItems: 'center',
    //     marginTop: 20,
    //     paddingHorizontal: 10,
    //     width: windowWidth,
    // },
});
