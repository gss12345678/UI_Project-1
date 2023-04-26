import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";






export default function PopularActivities({ navigation }){

    return(
       
        <View style={{width: "100%", paddingTop: 5, paddingBottom: 10, backgroundColor: "white"}}>

           <Text style={{fontSize: 22, marginLeft: 20, fontWeight: 600, color: "black"}}>Popular activities</Text>
           <Text style={{position: "absolute",  textDecorationLine: 'underline', marginLeft: 270, marginTop: 10, fontSize: 17, color: "black"}}>See more</Text>

           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
             <View style={{width: 885, backgroundColor: "transparent", marginLeft: 5, marginTop: 10, flexDirection: "row"}}>
                {Activities}
             </View>
           </ScrollView>

        </View>
       
    );
}



var Activities = [];
var city = ['Delhi', 'Delhi', 'Mumbai', 'Delhi', 'Agra'];
var Title = ['3D2N Golden Triangle Tour from tdzg', 'Taj Mahal and Agra Private Day Tour by kjgsdj', 'Highlights of Mumbai Day Tour DSsfsa', 'New and & Delhi Day Tour', 'Taj Mahal and Agra Fort Day Tour from jhfDS'];
var Rating = ['4.6', '4.3', '4.8', '3.8', '4.2'];
var Ratingcount = ['(105)', '(55)', '(56)', '(20)', '(42)'];
var tag = ['English available', 'Bestseller', 'Easy Refund', 'Instant Confirmation', 'Bestseller'];
var pricecut = ['4,920', '5,915', '6000', '4,900', '3,150'];
var price= ['3,333', '3,900', '5,546', '3,080', '1,650'];
var Img = [require('./assets/Taj2.webp'), require('./assets/redfort.webp'), require('./assets/mumbai1.webp'), require('./assets/lotus.webp'), require('./assets/Taj1.webp')];



for(let i = 0; i<5; i++){
    Activities.push(
        <TouchableOpacity>
        <View key={i} style={{backgroundColor: "transparent", paddingRight: 5, paddingTop: 5, paddingBottom: 5, paddingLeft: 5, marginLeft: 5, marginTop: 0}}>
            <Image source={Img[i]} style={{width: 160, height: 105, backgroundColor: "blue", borderRadius: 18}}></Image>
            <Text style={{fontSize: 14.5, color: "gray", marginTop: 3}}>{city[i]}</Text>
            <Text style={{fontSize: 16.5, fontWeight: 500, marginTop: 2, width: 150, color: "black"}} numberOfLines={2}>{Title[i]}</Text>
            <Image source={require('./assets/star_30px.png')} style={{width: 13, height: 13, marginTop: 8}}></Image>
            <Text style={{fontSize: 15, color: "#FFA500", position: "absolute", marginTop: 179.5, marginLeft: 22, fontWeight: 500}}>{Rating[i]}</Text>
            <Text style={{fontSize: 14, color: "rgb(152, 149, 148)", position: "absolute", marginTop: 179, marginLeft: 45.5, fontWeight: 400}}>{Ratingcount[i]}</Text>
            <Text style={{color: "rgb(101, 101, 100)", fontSize: 13, paddingLeft: 5, paddingRight: 5, paddingTop: 2, paddingBottom: 2, backgroundColor: "rgb(245, 245, 242)", marginTop: 8, fontWeight: 400, alignSelf: "flex-start", borderRadius: 3}}>{tag[i]}</Text>
            <Text style={{fontSize: 14, color: "rgb(147, 147, 146)", textDecorationLine: "line-through", marginTop: 5}}>{'\u20B9'}{pricecut[i]}</Text>
            <Text style={{fontSize: 13, fontWeight: 400, marginTop: 5}}>From</Text>
            <Text style={{fontSize: 15, fontWeight: 500, position: "absolute", marginTop: 253, marginLeft: 40, color: "black"}}>{'\u20B9'}{price[i]}</Text>
            <View style={{height: 23, backgroundColor: "rgb(250, 229, 215)", borderRadius: 5, marginTop: 5, paddingLeft: 7, paddingRight: 7, paddingTop: 2, alignSelf: "flex-start"}}>
                <Text style={{fontSize: 11, fontWeight: 500, color: "orangered"}}>Best Price Guarantee</Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}


