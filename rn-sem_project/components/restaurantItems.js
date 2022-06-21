import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { RestaurantDataContext } from "../data/context";

export default function RestaurantItems(props) {
    const obj = useContext(RestaurantDataContext);
    const localRestaurants = obj.restaurants;
    const locate = props.filter;
    const type = props.activeButton;
    function visible(j) {
        if (j == locate)
            return true;
        return false;
    }
    function filter(status) {
        if (parseInt(status) === type || parseInt(status) == "01") {
            return true;
        }
        else
            return false;
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {localRestaurants.map((restaurant, index) => (
                <TouchableOpacity onPress={() => props.navigation.navigate('Item Menu', { index: index, item: restaurant })}
                    key={index} activeOpacity={1}
                    style={visible(localRestaurants[index].loc) && filter(restaurant.delivery) ? styles.container : styles.nocontainer}>
                    <View
                        style={visible(localRestaurants[index].loc) && filter(restaurant.delivery) ? { marginTop: 10, padding: 15, backgroundColor: "white" } : styles.nocontainer1}>
                        {/* style={visible(localRestaurants[index].loc) ? { marginTop: 10, padding: 15, backgroundColor: "white" } : styles.nocontainer1}> */}
                        <RestaurantImage image={restaurant.image_url} />
                        {/* <RestaurantImage image={localRestaurants[index].image_url} /> */}
                        <RestaurantInfo name={restaurant.name} rating={restaurant.rating} wait={restaurant.wait} />
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#ecf0f1',
    //     padding: 8,
    // },
    container: {
        width: '100%'
    },
    nocontainer: {
        visibility: false,
    },
    nocontainer1: {
        width: 0,
        height: 0
    },
});

const RestaurantImage = (props) => (
    <>
        <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
    </>
);

const RestaurantInfo = (props) => (
    <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
    }}>
        <View>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
            <Text style={{ fontSize: 13, color: "gray" }}>{props.wait}</Text>
        </View>
        <View style={{
            backgroundColor: "#eee",
            height: 30,
            width: 30,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 15,
        }}>
            <Text>{props.rating}</Text>
        </View>
    </View>
);