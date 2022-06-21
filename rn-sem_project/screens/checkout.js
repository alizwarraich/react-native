import { View, Image, StatusBar, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Divider } from 'react-native-paper';
// import LottieView from 'lottie-react-native';

export default function Checkout({ navigation, route }) {
    const [name, setName] = useState(route.params.name);
    const [total, setTotal] = useState(route.params.total);
    const [items, setItems] = useState(route.params.items);
    return (
        <View style={styles.container}>
            {/* <LottieView
                source={require('../assets/animations/782-check-mark-success.json')}
                style={{ width: 80, height: 80, color: 'green' }}
            /> */}
            <Ionicons name="checkmark-done-outline" size={75} color="green" />
            <Text>Your order at {name} has been placed for {total} Rs.</Text>
            <ScrollView style={{ marginTop: 30 }}>
                <Divider style={{ marginBottom: 23 }} />
                {items.map((item, index) => (
                    <>
                        <View style={styles.menuItemStyle}>
                            <View style={{ width: 240, justifyContent: "space-evenly" }}>
                                <Text style={styles.titleStyle}>{item.title}</Text>
                                <Text>{item.description}</Text>
                                <Text>{item.price}</Text>
                            </View>
                            <View style={{ marginLeft: -10 }}>
                                <Image
                                    source={{ uri: item.image }}
                                    style={{ width: 100, height: 100, borderRadius: 8 }}
                                />
                            </View>
                        </View>
                        <Divider style={{ marginVertical: 23 }} />
                    </>
                ))}

                <View style={{ marginTop: 100, marginBottom: 50, flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                    <TouchableOpacity style={{ width: 150, backgroundColor: '#D4263F', borderRadius: 30, padding: 13, alignItems: 'center' }}
                        onPress={() => navigation.navigate('RestaurantsHeader')}>
                        <Text style={{ color: 'white', fontSize: 19 }}>
                            Browse
                        </Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    menuItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
        marginTop: 10,
        marginBottom: 0,
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: "600",
    },
    backButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
