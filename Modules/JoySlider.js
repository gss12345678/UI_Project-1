import React from "react";
import { ScrollView, View, FlatList, Text, TouchableOpacity, Image} from "react-native";
import LinearGradient from "react-native-linear-gradient";


const UpSlide = () =>{
    var UpperSlide = [];
    var UpperSlideTitle = ['Varanasi', 'Haridwar', 'Pattaya', 'Kuala Lumpur', 'Tokyo'];
    var UpperSlideBackgrounds = [require('./assets/varanasi2.jpg'), require('./assets/Haridwar1.jpg'), require('./assets/pattaya.webp'), require('./assets/kualalumpur.webp'), require('./assets/tokyo.webp'),];
  
    for(let i = 0; i < 5; i++){
  
      UpperSlide.push(
        <TouchableOpacity>
            <View key = {i} style={{width: 160, height: 100, backgroundColor: "gray", marginLeft: 13, borderRadius: 17}}>
                  <Image source={UpperSlideBackgrounds[i]} style={{width: 160, height: 100, position: "absolute", borderRadius: 17}} ></Image>
                  <LinearGradient colors={['black', 'transparent']} style={{zIndex: 10, width: "100%", height: 70, borderTopLeftRadius: 17, borderTopRightRadius: 17, opacity: 0.65, position: "absolute"}}></LinearGradient> 
                  <Text style={{color: "white", fontSize: 17.5, fontWeight: 600, position: "absolute", zIndex: 10, marginTop: 8, marginLeft: 15}}>{UpperSlideTitle[i]}</Text>
            </View>
        </TouchableOpacity> 
              
      )
    }
  
    return UpperSlide
  }





  const DownSlide = () =>{
    var LowerSlide = [];
    var LowerSlideTitle = ['Rameshwaram', 'Vaisno  Devi', 'Paris', 'Da Nang', 'Halong'];
    var LowerSlideBackgrounds = [require('./assets/rameshwaram1.jpg'),require('./assets/vaisno1.webp'),require('./assets/pasris.webp'), require('./assets/danang.webp'), require('./assets/halong.webp'),];
    
    for(let j = 0; j < 5; j++){

    LowerSlide.push(
      <TouchableOpacity>
      <View key = {j} style={{width: 160, height: 100, backgroundColor: "gray", marginLeft: 13, borderRadius: 17}}>
                 <Image source={LowerSlideBackgrounds[j]} style={{width: 160, height: 100, position: "absolute", borderRadius: 17}}></Image>
                 <LinearGradient colors={['black', 'transparent']} style={{zIndex: 10, width: "100%", height: 70, borderTopLeftRadius: 17, borderTopRightRadius: 17, opacity: 0.65, position: "absolute"}}></LinearGradient> 
                 <Text style={{color: "white", fontSize: 17.5, fontWeight: 600, position: "absolute", zIndex: 10, marginTop: 8, marginLeft: 15}}>{LowerSlideTitle[j]}</Text>
            </View>
            </TouchableOpacity>
    )
  }

  return LowerSlide

}


  


export default function JoySlider({navigation}){


    return(
        
        <View style={{width: "100%", height: 305, backgroundColor: "white"}}>

          <Text style={{fontSize: 23, position: "absolute", fontWeight: 600, marginLeft: 18, marginTop: 4, width: 200, color: "black"}}>Where will you find joy?</Text>

              <TouchableOpacity style={{width: 100, height: 28, backgroundColor: "rgb(253, 81, 18)", position: "absolute", borderRadius: 8, marginTop: 35, marginLeft: 250}}>
                  <Text style={{fontSize: 13, color: "white", fontWeight: 600, marginLeft: 13, marginTop: 3.5}}>See more</Text>
                  <Image source={require('./assets/forward_50px.png')} style={{position: "absolute", marginLeft: 78, width: 12, height: 12, marginTop: 7.5}}></Image>
              </TouchableOpacity>

           
           <ScrollView horizontal style={{flexDirection: "row"}} showsHorizontalScrollIndicator={false}>


              <View style={{width: 1046, height: "100%", backgroundColor: "transparent"}}>

         
                <View style={{width: "100%", height: 120, backgroundColor: "transparent", position: "absolute", marginTop: 74, flexDirection: "row", marginLeft: 169}}>
                  
                  {UpSlide()}

                </View>

                    <View style={{width: "100%", height: 120, backgroundColor: "transparent", position: "absolute", marginTop: 188, flexDirection: "row", marginLeft: 169}}>
                     
                     {DownSlide()}

                     </View>


            <TouchableOpacity>
                <View style={{width: 155, height: 215, backgroundColor: "gray", position: "absolute", marginTop: 74, marginLeft: 15, borderRadius: 17}}>
                   
                 <Image source={require('./assets/Tirupati5.jpg')} style={{width: 155, height: 215, position: "absolute", borderRadius: 17}}></Image>

                 <LinearGradient colors={['black', 'transparent']} style={{zIndex: 10, width: "100%", height: 150, borderTopLeftRadius: 17, borderTopRightRadius: 17, opacity: 0.45}}></LinearGradient> 

                 <Text style={{color: "white", fontSize: 18, fontWeight: 600, position: "absolute", zIndex: 10, marginTop: 8, marginLeft: 15}}>Tirupati</Text>  
                 
                 </View>
             </TouchableOpacity>




           </View>

        </ScrollView>

      </View>

        

    );

}