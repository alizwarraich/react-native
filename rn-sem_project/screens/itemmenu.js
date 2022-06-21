import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Modal, Text, ImageBackground, SafeAreaView, View, ScrollView, Image, TouchableOpacity, Pressable } from 'react-native';
import { Divider } from 'react-native-paper';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useState, useContext } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RestaurantDataContext } from '../data/context';

export default function ItemMenu({ route, navigation }) {

    const restaurentInfo = route.params.item;

    const obj = useContext(RestaurantDataContext);
    const foods = obj.items;

    const name = restaurentInfo.name;
    const rating = restaurentInfo.rating;
    const reviews = restaurentInfo.reviews;
    const image = restaurentInfo.image_url;
    const location = restaurentInfo.loc;

    const description = `${name} - ${location} - ⭐${rating} rating with ${reviews}+ reviews`;

    const [modal, setModal] = useState(false);
    const [total, setTotal] = useState(0);
    const [addedItems, setAddedItems] = useState([]);
    const checkout = () => {
        setModal(false);
        navigation.navigate("Checkout", { items: addedItems, name: name, total: total });
    }
    function addItem(item, condition) {
        let price = item.price;
        if (condition == true) {
            setTotal(total + parseInt(price.split('.')[1]));
            addedItems.push(item);
        }
        else {
            setTotal(total - parseInt(price.split('.')[1]));
            for (let i = 0; i < addedItems.length; i++) {
                if (item.name == addedItems[i].name)
                    addedItems.splice(i, 1);
            }
        }
    }
    // console.log(total);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    {<RestaurentImage image={image} navigation={navigation} />}
                    {<RestaurentName name={name} />}
                    {<RestaurentDescription description={description} />}
                    <Divider style={{ marginVertical: 23 }} />
                </View>

                {foods.map((food, index) => (
                    <View key={index}>
                        <View key={index} style={styles.menuItemStyle}>
                            <BouncyCheckbox
                                iconStyle={{ borderColor: 'lightgrey', borderRadius: 0 }}
                                fillColor="#D4263F"
                                onPress={(isChecked) => addItem(food, isChecked)}
                            />
                            {<FoodInfo food={food} />}
                            {<FoodImage food={food} />}

                            <StatusBar style="auto" />
                        </View>
                        <Divider style={{ marginVertical: 23 }} />

                    </View>
                ))}
            </ScrollView>
            {/* <ViewCart navigation={navigation} RestaurentName={route.params.name}/> */}

            <View style={{ flex: 1, alignItems: 'center', marginBottom:35, marginLeft: 153, justifyContent: 'center', flexDirection: 'row', position: 'absolute', bottom: 10, }}>
                < View style={{ flexDirection: 'row', justifyContent: "center", width: 100, }}>
                    <TouchableOpacity style={{ width: 300, backgroundColor: '#D4263F', borderRadius: 30, padding: 13, alignItems: 'center' }}
                        onPress={() => setModal(true)}
                    >
                        <Text style={{ color: 'white', fontSize: 19 }}>
                            View Cart
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* View Cart Model */}

            <Modal
                animationType='slide'
                visible={modal}
                transparent={true}
                onRequestClose={() => setModal(false)}>

                <View style={styles.modalContainer}>
                    <View style={styles.modalSubcontainer}>
                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 18, fontWeight: '700', marginLeft: 120, marginRight: 100 }}>{name}</Text>
                            <View>
                                <Pressable onPress={() => setModal(false)}>
                                    <Ionicons name="close-circle-outline" size={24} />
                                </Pressable>
                            </View>
                        </View>

                        <View style={{ width: '100%' }}>
                            <ScrollView style={{ width: '100%' }}>
                                {addedItems.map((item, index) => (
                                    <View style={styles.orderItem}>
                                        <Text style={{ fontWeight: '600', fontSize: 16 }}>{item.title}</Text>
                                        <Text style={{ opacity: 0.7, fontSize: 16 }}>{parseInt(item.price.split('.')[1])}</Text>
                                    </View>
                                ))}
                            </ScrollView>
                        </View>
                        <View style={styles.subTotal}>
                            <Text style={{ fontWeight: '600', fontSize: 14 }}>Subtotal</Text>
                            <Text style={{ fontSize: 14 }}>{total}</Text>
                        </View>
                        <TouchableOpacity style={styles.checkoutButton} onPress={() => checkout()}>
                            <Text style={{ color: '#fff', fontSize: 20 }}>Checkout</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </Modal>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 31,
        // backgroundColor: '#fff',
    },
    menuItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: Platform.OS === 'ios' ? 20 : 30,
        marginTop: 10, 
        marginBottom: 0,
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: "600",
        justifyContent: 'space-evenly',
        marginLeft: -5,
        paddingRight: 9,

    },
    modalContainer: {
        width: '100%',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        // marginTop: 56,
        backgroundColor: "rgba(0,0,0,0.6)",
        // marginHorizontal: 20,
    },
    modalSubcontainer: {
        padding: 20,
        backgroundColor: '#fff',
        width: '100%',
        alignItems: 'center',
        position: 'fixed',
        paddingBottom: 120,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
    },
    checkoutButton: {
        backgroundColor: '#D4263F',
        padding: 13,
        borderRadius: 30,
        width: 300,
        alignItems: 'center',
    },
    orderItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#999',
    },
    subTotal: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingBottom: 40,
    },
    backButton: {
        backgroundColor: 'white',
        width: 33,
        borderRadius: 20,
        marginTop: 10,
        marginLeft: 10,
    },
})




const FoodInfo = (props) => (
    <View style={{ width: 180, justifyContent: "space-evenly" }}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text style={{ justifyContent: 'space-evenly', marginLeft: -5, paddingRight: 18, }}>{props.food.description}</Text>
        <Text style={{ marginLeft: -5 }}>{props.food.price}</Text>
    </View>
);

const FoodImage = (props) => (
    <View style={{ marginLeft: -30 }}>
        <Image
            source={{ uri: props.food.image }}
            style={{ width: 100, height: 100, borderRadius: 8 }}
        />
    </View>
);
const RestaurentImage = (props) => (
    <ImageBackground source={{ uri: props.image }} style={{ width: '100%', height: 180 }}>
        <Pressable style={styles.backButton} onPress={() => props.navigation.navigate('RestaurantsHeader')}>
            <Ionicons name="arrow-back-outline" size={32} color="#333" />
        </Pressable>
    </ImageBackground >
);
const RestaurentName = (props) => (

    <Text style={{
        fontSize: 29,
        fontWeight: '600',
        marginTop: 10,
        marginHorizontal: 15,
    }}>{props.name}</Text>
);
const RestaurentDescription = (props) => (
    <Text style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: '400',
        fontSize: 15.5,
    }}>{props.description}</Text>
);