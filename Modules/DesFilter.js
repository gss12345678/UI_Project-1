import { View, TouchableOpacity, Text, Image, TextInput, ScrollView } from "react-native";
import React from "react";
import CheckBox from '@react-native-community/checkbox';
import {useState} from 'react';


   







export default function DesFilter({navigation}){


    const [checkedItems, setCheckedItems] = useState([]);
  
    const items = [
      { name: 'Jaisalmer', id: 1 },
      { name: 'Hyderabad', id: 2 },
      { name: 'Varanasi', id: 3 },
      { name: 'Munnar', id: 4 },
      { name: 'Leh Ladakh', id: 5 },
      { name: 'Chennai', id: 6 },
      { name: 'Pushkar', id: 7 },
      { name: 'Andaman Islands', id: 8 },
      { name: 'Jammu & Kashmir', id: 9 },
      { name: 'New Delhi', id: 10 },
      { name: 'Dwarka', id: 11 },
      { name: 'Goa', id: 12 },
    ];
  
    const handleItemChecked = (id) => {
      if (checkedItems.includes(id)) {
        setCheckedItems(checkedItems.filter((item) => item !== id));
      } else {
        setCheckedItems([...checkedItems, id]);
      }
    };
  



       return(

        <View style={{height: "100%", width: "100%", backgroundColor: "white", zIndex: 10, position: "absolute"}}>

        <View style={{width: "100%", height: 50, backgroundColor: "transparent", borderBottomColor: "rgb(246, 243, 243)", borderBottomWidth: 2}}>
        <TouchableOpacity style={{ height: 20, width: 20, backgroundColor: "transparent", marginTop: 14, marginLeft: 17}}  onPress={() => navigation.navigate('Results')}>
        <Image source={require('./assets/close2.png')} style={{height: 20, width: 20}}></Image>
        </TouchableOpacity>
        <Text style={{color: "black", fontSize: 18.5, fontWeight: 600, position: "absolute", width: 120, marginLeft: 48, marginTop: 10.5}}>Destinations</Text>

        <TouchableOpacity style={{width: 100, position: "absolute", marginLeft: "82%", zIndex:10, marginTop: 11}}>
         <Text style={{fontSize: 18, fontWeight: 400, color: "black", width: 100}}>Clear</Text>
         </TouchableOpacity>
        </View>


        <View style={{width: "100%", height: 60, backgroundColor: "transparent", marginTop: 7, borderBottomWidth: 1.5, borderBottomColor: "rgb(234, 231, 231)"}}>
         <View style={{width: "89%", height: 50, backgroundColor: "rgb(240, 239, 239)", marginTop: 0, marginLeft: 20, paddingLeft: 10, fontSize: 15}}>
         <Image source={require('./assets/search.png')} style={{width: 25, height: 25, marginTop: 12, marginLeft: 13, position: "absolute"}}></Image>
         <TextInput style={{marginLeft: 40, marginLeft: 38, fontSize: 17}} placeholder="Search Destinations"></TextInput>
         </View>
         </View>
       
         <View style={{width: "100%", height: "75%", backgroundColor: "white"}}>
            <ScrollView>
                
            {items.map((item) => (
          <View key={item.id} style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: "transparent", borderColor: "#f0f0f0", borderBottomWidth: 1.5, height: 55 }}>
            <CheckBox style={{marginLeft: 15}}
              value={checkedItems.includes(item.id)}
              onValueChange={() => handleItemChecked(item.id)}
            />
            <Text style={{ marginLeft: 15, color: "black", fontSize: 18, fontWeight: 400 }}>{item.name}</Text>
          </View>
        ))}

        


            </ScrollView>
         </View>

         <TouchableOpacity style={{width: "95%", height: 50, backgroundColor: "orangered", marginTop: 8, marginLeft: 9, borderRadius: 2}}>
            <Text style={{color: "white", fontSize: 18, fontWeight: 500, marginTop: 9, marginLeft: 150}}>Apply</Text>
         </TouchableOpacity>
      

     </View>
       
       );
    


}