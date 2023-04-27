import { View, TouchableOpacity, Text, Image, ScrollView } from "react-native";



export default function ResultsBottomMenu(){

    return(
        <View style={{height: 50, width: 220, backgroundColor: "white", position: "absolute", zIndex: 10, marginTop: 594, marginLeft: "18%", borderRadius: 25, shadowColor: "black", elevation: 2}}>
      
        <TouchableOpacity style={{width: "50%", height: "100%", borderTopLeftRadius: 30, borderBottomLeftRadius: 30}}>
                <Image source={require('./assets/filter.png')} style={{width: 21, height: 21, marginTop: 15, marginLeft: 22, position: "absolute"}}></Image>
                <Text style={{color: "rgb(61, 61, 61)", fontSize: 15.8, fontWeight: 400, marginTop: 13, marginLeft: 50}}>Filters</Text>
            </TouchableOpacity>
 
            <View style={{width: 1.5, height: "100%", backgroundColor: "rgb(238, 236, 236)", position: "absolute", marginLeft: 115}}></View>
 
        <TouchableOpacity style={{backgroundColor: "transparent", width: 106, height: "100%", position: "absolute", marginLeft: "51%", borderTopRightRadius: 30, borderBottomRightRadius: 30}}>
               <Image source={require('./assets/sort.png')} style={{width: 21, height: 21, marginTop: 15, marginLeft: 13, position: "absolute"}}></Image>
               <Text style={{color: "rgb(61, 61, 61)", fontSize: 15.5, fontWeight: 400, marginTop: 13, marginLeft: 43}}>Sort by</Text>
            </TouchableOpacity>   
        
    </View>
    );
}