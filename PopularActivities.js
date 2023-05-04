import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { useState, useEffect} from 'react';
import axios from 'axios';






export default function PopularActivities({ navigation }){



//******************/
//Set Image Function  
//*****************/  
const [imageUrl, setImageUrl] = useState([]);

useEffect(()=>{
    getImageUrl();
},[])

const getImageUrl =async() =>{
   const res = await axios.get('http://146.56.55.136:3000/popular_activities/PAImages');
   setImageUrl(res.data);
   
  var arr = imageUrl;
   console.log(arr)

}




//******************/
//Set City Names Function  
//*****************/  
const [cityNames, setcityNames] = useState([]);

useEffect(()=>{
    getCityNames();
},[])

const getCityNames =async() =>{
   const res = await axios.get('http://146.56.55.136:3000/popular_activities/PAcityNames');
   setcityNames(res.data);
   
  var arr = cityNames;
   console.log(arr)

}


/******************/
//Set Title Function  
//*****************/  
const [Title, setTitle] = useState([]);

useEffect(()=>{
    getTitle();
},[])

const getTitle =async() =>{
   const res = await axios.get('http://146.56.55.136:3000/popular_activities/PATitles');
   setTitle(res.data);
   
  var arr = Title;
   console.log(arr)

}


/******************/
//Set Rating Function  
//*****************/  
const [Rating, setRating] = useState([]);

useEffect(()=>{
    getRating();
},[])

const getRating =async() =>{
   const res = await axios.get('http://146.56.55.136:3000/popular_activities/PARating');
   setRating(res.data);
   
  var arr = Rating;
   console.log(arr)

}



/******************/
//Set Rating Count Function  
//*****************/  
const [Ratingcount, setRatingCount] = useState([]);

useEffect(()=>{
    getRatingCount();
},[])

const getRatingCount =async() =>{
   const res = await axios.get('http://146.56.55.136:3000/popular_activities/PARatingCount');
   setRatingCount(res.data);
   
  var arr = Ratingcount;
   console.log(arr)

}



/******************/
//Set Tag1 Function  
//*****************/  
const [Tag1, setTag1] = useState([]);

useEffect(()=>{
    getTag1();
},[])

const getTag1 =async() =>{
   const res = await axios.get('http://146.56.55.136:3000/popular_activities/PATag1');
   setTag1(res.data);
   
  var arr = Tag1;
   console.log(arr)

}



/******************/
//Set Price cut Function  
//*****************/  
const [Pricecut, setPricecut] = useState([]);

useEffect(()=>{
    getPricecut();
},[])

const getPricecut =async() =>{
   const res = await axios.get('http://146.56.55.136:3000/popular_activities/PAPricecut');
   setPricecut(res.data);
   
  var arr = Pricecut;
   console.log(arr)

}



/******************/
//Set Price Function  
//*****************/  
const [Price, setPrice] = useState([]);

useEffect(()=>{
    getPrice();
},[])

const getPrice =async() =>{
   const res = await axios.get('http://146.56.55.136:3000/popular_activities/PAPrice');
   setPrice(res.data);
   
  var arr = Price;
   console.log(arr)

}



/******************/
//Set Tag2 Function  
//*****************/  
const [Tag2, setTag2] = useState([]);

useEffect(()=>{
    getTag2();
},[])

const getTag2 =async() =>{
   const res = await axios.get('http://146.56.55.136:3000/popular_activities/PATag2');
   setTag2(res.data);
   
  var arr = Tag2;
   console.log(arr)

}








    var Activities = [];




    for(let i = 0; i<5; i++){
        Activities.push(
            <TouchableOpacity key={i}  onPress={() => navigation.navigate('Results')}>
            <View key={i} style={{backgroundColor: "transparent", paddingRight: 5, paddingTop: 5, paddingBottom: 5, paddingLeft: 5, marginLeft: 5, marginTop: 0}}>
            {imageUrl ? <Image source={{uri : imageUrl[i]}} style={{width: 160, height: 105, backgroundColor: "blue", borderRadius: 18}}></Image>: null}
                <Text style={{fontSize: 14.5, color: "gray", marginTop: 3}}>{cityNames[i]}</Text>
                <Text style={{fontSize: 16.5, fontWeight: 500, marginTop: 2, width: 150, color: "black"}} numberOfLines={2}>{Title[i]}</Text>
                <Image source={require('./assets/star_30px.png')} style={{width: 13, height: 13, marginTop: 8}}></Image>
                <Text style={{fontSize: 15, color: "#FFA500", position: "absolute", marginTop: 179.5, marginLeft: 22, fontWeight: 500}}>{Rating[i]}</Text>
                <Text style={{fontSize: 14, color: "rgb(152, 149, 148)", position: "absolute", marginTop: 179, marginLeft: 45.5, fontWeight: 400}}>({Ratingcount[i]})</Text>
                <Text style={{color: "rgb(101, 101, 100)", fontSize: 13, paddingLeft: 5, paddingRight: 5, paddingTop: 2, paddingBottom: 2, backgroundColor: "rgb(245, 245, 242)", marginTop: 8, fontWeight: 400, alignSelf: "flex-start", borderRadius: 3}}>{Tag1[i]}</Text>
                <Text style={{fontSize: 14, color: "rgb(147, 147, 146)", textDecorationLine: "line-through", marginTop: 5}}>{'\u20B9'}{Pricecut[i]}</Text>
                <Text style={{fontSize: 13, fontWeight: 400, marginTop: 5}}>From</Text>
               
                <Text style={{fontSize: 15, fontWeight: 500, position: "absolute", marginTop: 253, marginLeft: 40, color: "black"}}>{'\u20B9'}{Price[i]}</Text>
                <View style={{height: 23, backgroundColor: "rgb(250, 229, 215)", borderRadius: 5, marginTop: 5, paddingLeft: 7, paddingRight: 7, paddingTop: 2, alignSelf: "flex-start"}}>
                    <Text style={{fontSize: 11, fontWeight: 500, color: "orangered"}}>{Tag2[i]}</Text>
                </View>
            </View>
            </TouchableOpacity>
        )
    }
    

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







