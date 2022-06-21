import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
// import { Axios } from "react-native-axios";

export const localRestaurants = [
    {
        name: "Street 1 Cafe",
        image_url: "https://media-cdn.tripadvisor.com/media/photo-s/0e/bb/f8/96/im-diplo-viertel.jpg",
        min_order: "$10",
        reviews: 10000,
        rating: 4.2,
        wait: "25-35 • min",
        loc: "Islamabad"
    },
    {
        name: "Chaaye Khana",
        image_url: "https://i0.wp.com/contactlist.pk/wp-content/uploads/2022/01/chaaye-khana-islamabad-contact-number.jpg",
        min_order: "$8",
        reviews: 13000,
        rating: 4.7,
        wait: "20-25 • min",
        loc: "Islamabad"
    },
    {
        name: "Burning Brownie",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8BHGzerXh3uLmU_FoPdidn-lYWbJ_qQMYFg&usqp=CAU",
        min_order: "$6",
        reviews: 11000,
        rating: 4.9,
        wait: "25-30 • min",
        loc: "Islamabad"
    },
    {
        name: "Cafe Rustic",
        image_url: "https://archello.s3.eu-central-1.amazonaws.com/images/2018/01/31/IndustrialrusticJuanValdezCaf3.1517370772.9964.jpg",
        min_order: "$13",
        reviews: 7000,
        rating: 4.9,
        wait: "25-30 • min",
        loc: "Islamabad"
    },
    {
        name: "Deejos",
        image_url: "https://roamingpakistan.com/wp-content/uploads/2021/07/chris-liverani-oCsaxvGCehM-unsplash-scaled-e1626209270811.jpg",
        min_order: "$13",
        reviews: 12500,
        rating: 4.6,
        wait: "25-30 • min",
        loc: "Islamabad"
    },
    {
        name: "PENTHOUSE",
        image_url: "https://lh5.googleusercontent.com/p/AF1QipOUxpjZeIC_XEURI6jACS6kNI3mjyKttS0ESAI=w500-h500-k-no",
        min_order: "$10",
        reviews: 23000,
        rating: 4.9,
        wait: "25-35 • min",
        loc: "Lahore"
    },
    {
        name: "Haveli Restaurant",
        image_url: "https://i.pinimg.com/originals/5a/6d/ce/5a6dce933c44b67ad9e142a4049b9674.jpg",
        min_order: "$15",
        reviews: 19000,
        rating: 4.7,
        wait: "20-25 • min",
        loc: "Lahore"
    },
    {
        name: "Cafe Barbera",
        image_url: "https://thefoodxp.com/wp-content/uploads/2020/06/Cafe-Barbera-store.jpeg",
        min_order: "$13",
        reviews: 11000,
        rating: 3.8,
        wait: "30-35 • min",
        loc: "Lahore"
    },
    {
        name: "Cafe Ostyria",
        image_url: "https://api.yopals.com/16315367007075F9EA6A5-90BB-45BE-81E1-DC230845B173.jpeg",
        min_order: "$16",
        reviews: 8000,
        rating: 4.3,
        wait: "25-35 • min",
        loc: "Lahore"
    },
    {
        name: "English Tea House",
        image_url: "https://www.locallylahore.com/wp-content/uploads/english-tea-house.jpg",
        min_order: "$13",
        reviews: 8500,
        rating: 4.5,
        wait: "25-30 • min",
        loc: "Lahore"
    },
    {
        name: "Kolachi Restaurant",
        image_url: "https://i.ytimg.com/vi/W25vWymNa50/maxresdefault.jpg",
        min_order: "$22",
        reviews: 6500,
        rating: 4.2,
        wait: "25-35 • min",
        loc: "Karachi"
    },
    {
        name: "Suzie Wong",
        image_url: "https://media-cdn.tripadvisor.com/media/photo-s/10/cd/1b/72/modern-and-contemporary.jpg",
        min_order: "$15",
        reviews: 17000,
        rating: 4.7,
        wait: "20-25 • min",
        loc: "Karachi"
    },
    {
        name: "Lotus Court",
        image_url: "https://media-cdn.tripadvisor.com/media/photo-s/0d/3c/15/52/lotus-court.jpg",
        min_order: "$10",
        reviews: 18000,
        rating: 4.9,
        wait: "25-30 • min",
        loc: "Karachi"
    },
    {
        name: "Rajdhani Restaurant",
        image_url: "https://www.brandsynario.com/wp-content/uploads/2018/09/rajdhani-delights.jpg",
        min_order: "$8",
        reviews: 14200,
        rating: 4.9,
        wait: "35-40 • min",
        loc: "Karachi"
    },
    {
        name: "Xander's Clifton",
        image_url: "https://tripako.com/wp-content/uploads/2021/01/10.jpg",
        min_order: "$13",
        reviews: 15000,
        rating: 4.4,
        wait: "20-25 • min",
        loc: "Karachi"
    },
    {
        name: "Mei Kong",
        image_url: "https://lh3.googleusercontent.com/p/AF1QipP_34_t06tLOEqZREIm_xUQUdDeWIGfabO8GWYC=s1600-w400",
        min_order: "$13",
        reviews: 10500,
        rating: 4.9,
        wait: "45-50 • min",
        loc: "Rawalpindi"
    },
    {
        name: "Monal Downtown",
        image_url: "https://i.ytimg.com/vi/Y1WuGZMWj5g/hqdefault.jpg",
        min_order: "$12.5",
        reviews: 21500,
        rating: 4.7,
        wait: "35-40 • min",
        loc: "Rawalpindi"
    },
    {
        name: "Ox & Grill Steak House",
        image_url: "https://foodnerd.s3-eu-west-1.amazonaws.com/production/image/file/168/Ox-and-grill-Islamabad-steak-Islamabad-foodnerd-delivery.jpg",
        min_order: "$15",
        reviews: 9000,
        rating: 3.0,
        wait: "35-45 • min",
        loc: "Rawalpindi"
    },
    {
        name: "Tai Pan",
        image_url: "https://www.pchotels.com/uploads/host/201000003_1567509894.jpg",
        min_order: "$20",
        reviews: 15500,
        rating: 4.9,
        wait: "40-50 • min",
        loc: "Rawalpindi"
    },
    {
        name: "Pizza Square",
        image_url: "http://directory.thecookbook.pk/wp-content/uploads/2021/08/20190323_182831.jpg",
        min_order: "$5",
        reviews: 6500,
        rating: 4.1,
        wait: "20-30 • min",
        loc: "Rawalpindi"
    }
];

export default function RestaurantItems(props) {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {localRestaurants.map((restaurant, index) => (
                <TouchableOpacity onPress={() => props.navigation.navigate('Item Menu', index)}
                    key={index} activeOpacity={1} style={{ width: "100%" }}>
                    <View style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
                        <RestaurantImage image={restaurant.image_url} />
                        <RestaurantInfo name={restaurant.name} rating={restaurant.rating} wait={restaurant.wait} />
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

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