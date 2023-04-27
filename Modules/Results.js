import { View, TouchableOpacity, Text, Image, ScrollView, useState } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import ResultsBottomMenu from "./ResultsBottomMenu";




var DestinationCount = [1];
var ResultCount = [3];
var ResultImage = [require('./assets/resultVaranasi1.webp'),require('./assets/resultVaranasi2.webp'), require('./assets/varanasi1.jpg')];
var ResultCity = ['Varanasi', 'Varanasi', 'Varanasi'];
var ResultDiscount = ['26', '13', '20'];
var ResultTitle = ['Varanasi Private Day Tour', '2D1N Varanasi Private Sightseeing Tour', 'Shri Kashi Vishwanath Tour'];
var ResultReview = ['3.5', '4.2', '3.8'];
var ResultReviewCount = ['2', '10', '8'];
var ResultBooikngs = ['100', '50', '80'];
var ResultPriceCut = ['1,150', '2,480', '4,790'];
var ResultPrice = ['850', '1,790', '3,560'];










export default function Results({navigation}){

    
    const RenderResults = () =>{
        const res = [];
        for(let i=0; i<3; i++){
            
            res.push(
              
                <TouchableOpacity key={i} onPress={() => navigation.navigate('Home')}>
                <View key={i} style={{backgroundColor: "white", marginTop: 20, width: "90%", height: 335, marginLeft: "5%", borderRadius: 3, shadowColor: "black", elevation: 8}}>
                    <LinearGradient colors={['black', 'transparent']} style={{width: "100%", height: 55, opacity: 0.3, borderTopRightRadius: 3, borderTopLeftRadius: 3, zIndex: 10}}></LinearGradient>
                    <Image source={ResultImage[i]} style={{width: "100%", position: "absolute", height: 190, borderTopRightRadius: 3, borderTopLeftRadius: 3}}></Image>
                    <Image source={require('./assets/location.png')} style={{position: "absolute", width: 18, height: 18, zIndex: 10, marginTop: 15, marginLeft: 15}}></Image>
                    <Text style={{color: "white", fontSize: 14, fontWeight: 400, marginLeft: 37, position: "absolute", marginTop: 15, zIndex: 10}}>{ResultCity[i]}</Text>
                    <View style={{width: 80, height: 35, backgroundColor: "rgb(254, 90, 30)", position: "absolute", marginTop: 140, marginLeft: 18, borderRadius: 3}}>
                        <Text style={{color: "white", fontWeight: 500, fontSize: 14.6, marginLeft:10, marginTop: 6}}>{ResultDiscount[i]}% OFF</Text>
                    </View>

                    <Text style={{color: "black", fontSize: 17, fontWeight: 600, marginTop: 145, marginLeft: 19, width: "89%"}} numberOfLines={1}>{ResultTitle[i]}</Text>
                    <Image source={require('./assets/star_30px.png')} style={{width: 15, height: 15, marginLeft: 17, marginTop: 16}}></Image>
                    <Text style={{color: "orange", fontSize: 16, marginLeft: 36, position: "absolute", marginTop: 235}}>{ResultReview[i]}</Text>
                    <Text style={{position: "absolute", fontSize: 14.5, fontWeight: 400, marginTop: 236, marginLeft: 62.5, color: "gray"}}>({ResultReviewCount[i]} reviews)</Text>

                    <View style={{height: 15, width: 1.3, backgroundColor: "rgb(224, 222, 222)", position: "absolute", marginLeft: 148, marginTop: 240, borderRadius: 10}}></View>

                    <Text style={{color: "gray", fontSize: 13.5, fontWeight: 400, marginLeft: 158, position: "absolute", marginTop: 238}}>{ResultBooikngs[i]}+ booked</Text>
                    <Text style={{color: "rgb(156, 154, 154)", textDecorationLine: "line-through", marginLeft: 20, marginTop: 20}}>{'\u20B9'}{ResultPriceCut[i]}</Text>
                    <Text style={{color: "black", fontSize: 14.5, marginLeft: 20, position: "absolute", marginTop: 291, fontWeight: 400}}>From</Text>
                    <Text style={{color: "black", fontSize: 17, fontWeight: 600, marginLeft: 57.5, marginTop: 0.2}}>{'\u20B9'} {ResultPrice[i]}
                    <Image source={require('./assets/bolt.png')} style={{width: 18, height: 16, position: "absolute", marginTop: 295}}></Image>
                    </Text>

                    <Text style={{color: "rgb(4, 156, 4)", fontSize: 13.5, fontWeight: 400, marginLeft: 155, position: "absolute", marginTop: 295}}>Book now for tommorrow</Text>
                </View>
                </TouchableOpacity>
              
            )
        }

        return res

    }


    


   


    const TopMenu = () =>{

        return(
        <View>

           <View style={{width: "100%", height: 50, backgroundColor: "white", padding: 0, margin: 0}}>
           <TouchableOpacity style={{marginTop: 13, marginLeft: 15}} onPress={() => navigation.navigate('DesFilter')}>
             <Text style={{color: "black", fontSize: 14.5, fontWeight: 400}}>Destinations({DestinationCount})</Text>
             <Image source={require('./assets/expand.png')} style={{width: 17, height: 17, marginLeft: 103, position: "absolute", marginTop: 3}}></Image>
           </TouchableOpacity>
    
           <TouchableOpacity style={{marginTop: 13, marginLeft: 170, position: "absolute"}}>
             <Text style={{color: "black", fontSize: 14.5, fontWeight: 400}}>Categories</Text>
             <Image source={require('./assets/expand.png')} style={{width: 17, height: 17, marginLeft: 75, position: "absolute", marginTop: 3}}></Image>
           </TouchableOpacity>
    
           <View style={{width: "100%", height: 1, backgroundColor: "rgb(239, 236, 236)", marginTop: 18}}></View>
           </View>
    
       <View style={{width: "100%", height: 50, backgroundColor: "white", marginTop: 1.3}}>

          <TouchableOpacity style={{paddingLeft: 5, paddingTop: 0, paddingRight: 23, paddingBottom: 4, borderColor: "black", borderWidth: 1.2, borderRadius: 3, position: "absolute", marginTop: 12.5, marginLeft: 14}}>
             <Text style={{color: "black", fontSize: 14}}>Varanasi</Text>
             <Image source={require('./assets/close.png')} style={{position: "absolute", width: 12.5, height: 12.5, marginLeft: 63, marginTop: 4.5}}></Image>
          </TouchableOpacity>
    
          <TouchableOpacity>
             <Image source={require('./assets/no.png')} style={{position: "absolute", marginLeft: 320, marginTop: 15, width: 20, height: 20}}></Image>
          </TouchableOpacity>

       </View>
    
       <Text style={{color: "gray", fontSize: 16, position: "absolute", marginTop: 120, marginLeft: 20, fontWeight: 400}}>{ResultCount} Activities</Text>
    
        
        </View>
             
        );
     }
  

    
    return(
        <View>

          
         <ResultsBottomMenu></ResultsBottomMenu>

        
         <View style={{zIndex: 10}}>
            {TopMenu()}
         </View>
         
         <ScrollView nestedScrollEnabled style={{marginTop: 50}}>
          {RenderResults()}
         <View style={{width: "100%", height: 120}}></View>
         </ScrollView>
        


           
        </View>
    );

    
}