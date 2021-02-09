import React, {Component} from 'react';
import {
   StyleSheet,
    ScrollView,
    Image,
    View,Text,Dimensions,BackHandler,
    TouchableOpacity,
    TextInput,
    Button
  } from 'react-native';
  import Icon from 'react-native-vector-icons/Ionicons';
  import { Actions } from 'react-native-router-flux';


export default class Ranking extends Component {

    render() { 
    
      return (
     
      
          
             <View style={{ 
             flex: 1,
             justifyContent: 'center',
             alignItems:'center'}} >
             
            

             <Text style={{fontSize: 24, }}>Ranking</Text>
             
             </View>   
           
        
        
        
      );
    }

}
     

 
    
