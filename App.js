import * as React from 'react';
import { View, Text, Button ,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Results from './Results';
import DesFilter from './DesFilter';
import JoySlider from './JoySlider';
import PopularActivities from './PopularActivities';



function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

    

      
      <TouchableOpacity style={{width: 100, height: 25, backgroundColor: "blue", borderRadius: 5, padding: 2}} onPress={() => navigation.navigate('Results')}>
       <Text style={{color: "white"}}>Results Module</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{width: 165, height: 25, backgroundColor: "red", marginTop: 10, borderRadius: 5, padding: 2}}  onPress={() => navigation.navigate('PopularActivities')}>
      <Text style={{color: "white"}}>Popular Activities Module</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{width: 115, height: 25, backgroundColor: "green", marginTop: 10, borderRadius: 5, padding: 2}}  onPress={() => navigation.navigate('JoySlider')}>
      <Text style={{color: "white"}}>Joy Slider Module</Text>
      </TouchableOpacity>
      
    </View>
  );
}






const Stack = createNativeStackNavigator();







function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="JoySlider" component={JoySlider} />
        <Stack.Screen name="Results" component={Results} />
        <Stack.Screen name="PopularActivities" component={PopularActivities} />
        <Stack.Screen name="DesFilter" component={DesFilter} 
         options={{
          headerShown: false,
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;




