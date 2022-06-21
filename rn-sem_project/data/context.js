import React, { createContext, useState } from 'react';
import axios from 'axios';

const RestaurantDataContext = createContext({
    restaurants: [],
    items: [],
});

export default function FunctionProvider({ children }) {

    const url = 'https://rn-sem-project-default-rtdb.firebaseio.com/data.json';
    const url1 = 'https://rn-sem-project-default-rtdb.firebaseio.com/data1.json';
    async function getData(url) {
        const response = await axios.get(url);
        const result = Object.values(response.data);
        // const lis = [];
        // lis.push(result);
        // return lis;
        return result;
    }

    const [item1, setItem1] = useState(getData(url1));
    const [restaurant1, setRestaurant1] = useState(getData(url));

    const [item, setItem] = useState([
        {
            title: "Chicken Biryani",
            description: "Delicious Biryani with grilled chicken",
            price: "Rs.299.00",
            image: "https://img-global.cpcdn.com/recipes/2ca17025ebce0dba/400x400cq70/photo.jpg",
        },
        {
            title: "Mutton karahi",
            description: "Full spicy mutton karahi with garlic sauce and chatni ",
            price: "Rs.2000.00",
            image: "https://lh3.googleusercontent.com/yEW3XUlxq3JMUVNDncZgf33-QYX7pemBUQsv0jxCwPql7UZJj4oooksJ0zm7KiCNjbF9Ewp8SIGITK1kknr8=w1920-h1920-c-rj-v1-e365",
        },
        {
            title: "Lasagnia",
            description: "Tasty lasagnia with butter lettuce and  spicy tomato sauce",
            price: "Rs.699.00",
            image: "https://demo.ziprecipes.net/wp-content/uploads/2020/07/Most-Amazing-Lasagna-2-e1574792735811.jpg",

        },
        {
            title: "Grilled Chicken",
            description: "Hot grilled chicken , the taste you love",
            price: "Rs.699.00",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ABTK4Lr3sV3YWzl5dBWID7gJWKqq-DtFww&usqp=CAU",
        },
        {
            title: "Shinwari Chicken biryani",
            description: "Spicy Shinwari biryani with 500ml drink",
            price: "Rs.399.00",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStDSqC7kxWeh9e40CuO8g-Z1WKGUYdo4ys5A&usqp=CAU",
        },
        {
            title: "Zinger Burger",
            description: "with fries and 300ml drink",
            price: "Rs.499.00",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGbDqtKe_taaO8kBB_vSoQzjm8rRtBzfFLPQ&usqp=CAU",
        },
        {
            title: "Beef Burger",
            description: "with fries",
            price: "Rs.599.00",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKY3lNkmnkTzW802TAHPHmCRnTTWEKnEnAuA&usqp=CAU",
        },
        {
            title: "Garlic Mayo Fries",
            description: "Fries with 500ml drink",
            price: "Rs.350.00",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQklaaVkZav9QH8iYtcC9ZjFFOE_r3a3PSn7Q&usqp=CAU",
        },
        {
            title: "Grilled Chicken Burger",
            description: "short gun burger with fries also available in beef",
            price: "Rs.550.00",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvHD-Hr3e5KYxUTyvGNDVokqt99VXop38Ipw&usqp=CAU",
        },
        {
            title: "Grilled Chicken",
            description: "Hot grilled chicken , the taste you love",
            price: "Rs.699.00",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ABTK4Lr3sV3YWzl5dBWID7gJWKqq-DtFww&usqp=CAU",
        },
        {
            title: "Chicken and Spinach Pizza",
            description: "Delicious chicken chunks,spinach,olives,feta cheese and roasted bell peppers with our classic pizza sauce",
            price: "Rs.799.00",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqYoKJpUm8WEM7aPL48_pGPJMQFQmSEpR_CA&usqp=CAU",
        },
        {
            title: "Chicken and Spinach Pizza",
            description: "Delicious chicken chunks,spinach,olives,feta cheese and roasted bell peppers with our classic pizza sauce",
            price: "Rs.799.00",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqYoKJpUm8WEM7aPL48_pGPJMQFQmSEpR_CA&usqp=CAU",
        },
        {
            title: "Chicken Margerita Pizza",
            description: "With our classes tomato sauce,mozarella cheese & fresh basil on our thin crust",
            price: "Rs.1199.00",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTquvbXCZ_RpRu1rJ6Wl1RhIZd6NgAEVBUHiA&usqp=CAU",
        },
        {
            title: "Chicken & jalapeno Pizza",
            description: "chunks of chicken,jalapeno,olives & mozzarella cheese with our classes sauce",
            price: "Rs.1199.00",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfIe3UndeHHlxx3p8TIWmWOJygf4MuEirO8g&usqp=CAU",
        },
        {
            title: "Tandoori Chicken Tikka Kebab ",
            description: "Salad with One piece Chicken tikka Chest(Serves 1)",
            price: "Rs.899.00",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwKYaxmBI6XwHV-dga4VlKGUHyegKPi6ShLw&usqp=CAU",
        },
        {
            title: "Lobia ",
            description: "Per plate",
            price: "Rs.285.00",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxPGTwiwRYUpkINFTSJD35Xfoi7X0MGL2PsA&usqp=CAU",
        },
        {
            title: "Chicken Tikka ",
            description: "Salad with One Leg Piece",
            price: "Rs.299.00",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVhEh_VlJlv9PKilZQiJfWzT667qMKVlGdig&usqp=CAU",
        },
        {
            title: "Hot and Sour Chicken Corn Soup ",
            description: "Warm & cozy checken corn soup is loadded with shredded chicken",
            price: "Rs.180.00",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnbBVMkmXh0pPfrnSi9ECCD436yzpFVko_LA&usqp=CAU",
        },
        {
            title: "Chicken Manchurian & Fried Rice ",
            description: "For perfect delicious taste boneless chicken ",
            price: "Rs.500.00",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfYy7YoMWv35ERAeI1-cKiqkjvrIW1ar8TLw&usqp=CAU",
        },
        {
            title: "Chicken Makhni Handi ",
            description: "An extremely rich man course of chicken,cook in a simple way",
            price: "Rs.549.00",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMBNmU8CdG1Y6ZG8XiZ30q6AeucfWcy_IPzA&usqp=CAU",
        },
        {
            title: "Full Broast Deal ",
            description: "4 Chicken broast pieces, 2 chest wing, 2 leg thigh with garlic mayo sauce",
            price: "Rs.549.00",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9yG1BgR2Are-KSd0vuHxXPQsEcbYv-4F1zA&usqp=CAU",
        },
        {
            title: "Chicken Chow Mein",
            description: "Serves 1-2 person",
            price: "Rs.639.00",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEtq7lw1mEWDjhWDfg1NjHOUyATLxLqFcNUQ&usqp=CAU",
        },
        {
            title: "Dynamite Prawn",
            description: "Serves 1 person",
            price: "Rs.399.00",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5EGGfuipV6X30zh0CQJlrnGwqVt1sAyuJJA&usqp=CAU",
        },
    ]);
    const [restaurant, setRestaurant] = useState([
        {
            name: "Street 1 Cafe",
            image_url: "https://media-cdn.tripadvisor.com/media/photo-s/0e/bb/f8/96/im-diplo-viertel.jpg",
            min_order: "$10",
            reviews: 10000,
            rating: 4.2,
            wait: "25-35 • min",
            loc: "Islamabad",
            delivery: '0',
        },
        {
            name: "Chaaye Khana",
            image_url: "https://i0.wp.com/contactlist.pk/wp-content/uploads/2022/01/chaaye-khana-islamabad-contact-number.jpg",
            min_order: "$8",
            reviews: 13000,
            rating: 4.7,
            wait: "20-25 • min",
            loc: "Islamabad",
            delivery: '0',
        },
        {
            name: "Burning Brownie",
            image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8BHGzerXh3uLmU_FoPdidn-lYWbJ_qQMYFg&usqp=CAU",
            min_order: "$6",
            reviews: 11000,
            rating: 4.9,
            wait: "25-30 • min",
            loc: "Islamabad",
            delivery: '0',
        },
        {
            name: "Cafe Rustic",
            image_url: "https://archello.s3.eu-central-1.amazonaws.com/images/2018/01/31/IndustrialrusticJuanValdezCaf3.1517370772.9964.jpg",
            min_order: "$13",
            reviews: 7000,
            rating: 4.9,
            wait: "25-30 • min",
            loc: "Islamabad",
            delivery: '1',
        },
        {
            name: "Deejos",
            image_url: "https://roamingpakistan.com/wp-content/uploads/2021/07/chris-liverani-oCsaxvGCehM-unsplash-scaled-e1626209270811.jpg",
            min_order: "$13",
            reviews: 12500,
            rating: 4.6,
            wait: "25-30 • min",
            loc: "Islamabad",
            delivery: '01'
        },
        {
            name: "PENTHOUSE",
            image_url: "https://lh5.googleusercontent.com/p/AF1QipOUxpjZeIC_XEURI6jACS6kNI3mjyKttS0ESAI=w500-h500-k-no",
            min_order: "$10",
            reviews: 23000,
            rating: 4.9,
            wait: "25-35 • min",
            loc: "Lahore",
            delivery: '0'
        },
        {
            name: "Haveli Restaurant",
            image_url: "https://i.pinimg.com/originals/5a/6d/ce/5a6dce933c44b67ad9e142a4049b9674.jpg",
            min_order: "$15",
            reviews: 19000,
            rating: 4.7,
            wait: "20-25 • min",
            loc: "Lahore",
            delivery: '0'
        },
        {
            name: "Cafe Barbera",
            image_url: "https://thefoodxp.com/wp-content/uploads/2020/06/Cafe-Barbera-store.jpeg",
            min_order: "$13",
            reviews: 11000,
            rating: 3.8,
            wait: "30-35 • min",
            loc: "Lahore",
            delivery: '0'
        },
        {
            name: "Cafe Ostyria",
            image_url: "https://api.yopals.com/16315367007075F9EA6A5-90BB-45BE-81E1-DC230845B173.jpeg",
            min_order: "$16",
            reviews: 8000,
            rating: 4.3,
            wait: "25-35 • min",
            loc: "Lahore",
            delivery: '01'
        },
        {
            name: "English Tea House",
            image_url: "https://www.locallylahore.com/wp-content/uploads/english-tea-house.jpg",
            min_order: "$13",
            reviews: 8500,
            rating: 4.5,
            wait: "25-30 • min",
            loc: "Lahore",
            delivery: '1'
        },
        {
            name: "Kolachi Restaurant",
            image_url: "https://i.ytimg.com/vi/W25vWymNa50/maxresdefault.jpg",
            min_order: "$22",
            reviews: 6500,
            rating: 4.2,
            wait: "25-35 • min",
            loc: "Karachi",
            delivery: '0'
        },
        {
            name: "Suzie Wong",
            image_url: "https://media-cdn.tripadvisor.com/media/photo-s/10/cd/1b/72/modern-and-contemporary.jpg",
            min_order: "$15",
            reviews: 17000,
            rating: 4.7,
            wait: "20-25 • min",
            loc: "Karachi",
            delivery: '0'
        },
        {
            name: "Lotus Court",
            image_url: "https://media-cdn.tripadvisor.com/media/photo-s/0d/3c/15/52/lotus-court.jpg",
            min_order: "$10",
            reviews: 18000,
            rating: 4.9,
            wait: "25-30 • min",
            loc: "Karachi",
            delivery: '0'
        },
        {
            name: "Rajdhani Restaurant",
            image_url: "https://www.brandsynario.com/wp-content/uploads/2018/09/rajdhani-delights.jpg",
            min_order: "$8",
            reviews: 14200,
            rating: 4.9,
            wait: "35-40 • min",
            loc: "Karachi",
            delivery: '01'
        },
        {
            name: "Xander's Clifton",
            image_url: "https://tripako.com/wp-content/uploads/2021/01/10.jpg",
            min_order: "$13",
            reviews: 15000,
            rating: 4.4,
            wait: "20-25 • min",
            loc: "Karachi",
            delivery: '1'
        },
        {
            name: "Mei Kong",
            image_url: "https://lh3.googleusercontent.com/p/AF1QipP_34_t06tLOEqZREIm_xUQUdDeWIGfabO8GWYC=s1600-w400",
            min_order: "$13",
            reviews: 10500,
            rating: 4.9,
            wait: "45-50 • min",
            loc: "Rawalpindi",
            delivery: '0'
        },
        {
            name: "Monal Downtown",
            image_url: "https://i.ytimg.com/vi/Y1WuGZMWj5g/hqdefault.jpg",
            min_order: "$12.5",
            reviews: 21500,
            rating: 4.7,
            wait: "35-40 • min",
            loc: "Rawalpindi",
            delivery: '0'
        },
        {
            name: "Ox & Grill Steak House",
            image_url: "https://foodnerd.s3-eu-west-1.amazonaws.com/production/image/file/168/Ox-and-grill-Islamabad-steak-Islamabad-foodnerd-delivery.jpg",
            min_order: "$15",
            reviews: 9000,
            rating: 3.0,
            wait: "35-45 • min",
            loc: "Rawalpindi",
            delivery: '0'
        },
        {
            name: "Tai Pan",
            image_url: "https://www.pchotels.com/uploads/host/201000003_1567509894.jpg",
            min_order: "$20",
            reviews: 15500,
            rating: 4.9,
            wait: "40-50 • min",
            loc: "Rawalpindi",
            delivery: '01'
        },
        {
            name: "Pizza Square",
            image_url: "http://directory.thecookbook.pk/wp-content/uploads/2021/08/20190323_182831.jpg",
            min_order: "$5",
            reviews: 6500,
            rating: 4.1,
            wait: "20-30 • min",
            loc: "Rawalpindi",
            delivery: '1'
        }
    ]);
    const values = {
        restaurants: restaurant,
        items: item,
    }
    return (
        <RestaurantDataContext.Provider value={values}>
            {children}
        </RestaurantDataContext.Provider>
    )
}

export { RestaurantDataContext };