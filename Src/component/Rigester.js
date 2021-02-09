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


export default class Register extends Component {
  
    render() { 
    
      return (
     
      <View style={{    
      flex: 1,
  
      justifyContent: 'center',}} >
          
             <View >
              
               <Text style={{fontSize: 24, fontWeight: 'bold', textAlign:'center'}} >Register</Text>
               </View>
               
               
               <View>
            
                    <View style={{flexDirection:'row', padding: 15   }}>
                        <Icon style={{ margin: 10}} size={24} color="gray" name="person" />
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', borderBottomWidth: 1,
                               width: '80%'     }}
                            placeholder="Username"
                        />
                    </View>
                    <View style={{flexDirection:'row', padding: 15  }}>
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', borderBottomWidth: 1,
                                 width:'80%', marginLeft: 43   }}
                            placeholder="First name"
                        />
                    </View>
                    <View style={{flexDirection:'row',  padding: 15 }}>
                       
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', borderBottomWidth: 1,
                            width:'80%', marginLeft: 43  }}
                            placeholder="Last name"
                        />
                    </View>
                    <View style={{flexDirection:'row',  padding: 15 }}>
                        <Icon style={{ margin: 10}} size={24} color="gray" name="ios-mail" />
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', borderBottomWidth: 1,
                            width: '80%' }}
                            placeholder="Email"
                        />
                    </View>
                    
                    
                    <View style={{flexDirection:'row',  padding: 15 }}>
                        <Icon style={{margin: 10}}  size={24} color="gray" name="ios-lock-closed" />
                        <TextInput
                        style={{ height: 40, borderColor: 'gray', borderBottomWidth: 1,
                        width: '80%' }}
                            placeholder="Password"
                        
                        />
                    </View>
                    <TouchableOpacity style={{backgroundColor:'#1e2b6b', alignSelf:'center', padding: 10, borderRadius: 15, width:'30%', margin:10 }} > 
                        <Text style={{textAlign:'center', fontSize: 16, fontWeight:'bold', color:'#ededed'}} >REGISTER</Text>
                    </TouchableOpacity>

            
              </View>

             
             
             </View>   
           
        
        
        
      );
    }

}
     
const styles = StyleSheet.create({
 
 mainview:{
    width: '90%',
    height: 60,
    marginTop: 15,  
    borderRadius: 30,
   
    borderWidth: 0.5,
    alignContent:'center',
    alignSelf:'center',
    textAlign:'center',
    borderColor: '#4444',
    flexDirection: 'row',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  picker: {
    width:"70%", 
    flexDirection:'row', 
    justifyContent:'space-between', 
    alignSelf:'center',
    margin: 8,
    borderColor: '#bababa',
    borderWidth:2,
    borderRadius: 30,
    padding: 10,
    paddingTop: 10
  
  },
  button:{
    backgroundColor: '#5999ff',
    height:50,
    borderRadius: 30,
    alignSelf:'center',
    padding: 6,
    width: '30%',
    
    
},
  textstyle:{ 
    marginLeft: 30,
    alignSelf:'center',      
    fontWeight:'bold',
    fontSize:20,
    color:'#000000',
  },
  
 
    

});