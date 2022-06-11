import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function BottomTabs() {
    return (
        <View style={styles.btmTabs}
        >
            <Icon icon="home-outline" text="Home" />
            <Icon icon="search-outline" text="Browse" />
            <Icon icon="receipt-outline" text="Orders" />
            <Icon icon="person-circle-outline" text="Account" />
        </View>
    );
}

const Icon = (props) => (
    <TouchableOpacity activeOpacity={0.6}>
        <View>
            <Ionicons name={props.icon} size={25} style={styles.icn} />
            <Text>{props.text}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    btmTabs: {
        flexDirection: "row",
        marginTop: 5,
        paddingTop: 4,
        marginHorizontal: 15,
        justifyContent: "space-between",
    },
    icn: {
        marginBottom: 3,
        alignSelf: "center",
    }
});