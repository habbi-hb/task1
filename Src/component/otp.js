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


export default class OTP extends Component {
   
  gotoDashboard=()=>{
    Actions.dashboard();
  }
    render() { 
    
      return (
     
      
          
             <View style={{    
             flex: 1,
             alignItems:'center',
             justifyContent: 'center',}}>
                 <Text style={{fontSize: 22, color:'#1e2b6b'}}>Account Confirmation</Text>
                <View style={{margin: 15}}>
                 <Text style={{fontSize: 14, color:'gray'}}>We've sent a code you at </Text>
                 <Text style={{fontSize: 16, color:'#1e2b6b', textAlign:'center'}}>jhondoe@xyz.com</Text>
                 </View>

                 <Text style={{fontSize: 14, color:'gray'}}>Please enter it blow</Text>
                 <View style={{flexDirection:'row'}}>
                 <TextInput
                  style={{ width: 50, margin: 10, textAlign:'center', borderColor: 'gray', borderWidth: 1, borderRadius: 15,
                    }}
                    keyboardType='numeric'
                 />
                   <TextInput
                  style={{ width: 50, margin: 10,  textAlign:'center',  borderColor: 'gray', borderWidth: 1, borderRadius: 15,
                    }}
                    keyboardType='numeric'
                 />
                   <TextInput
                  style={{ width: 50, margin: 10,  textAlign:'center',  borderColor: 'gray', borderWidth: 1, borderRadius: 15,
                    }}
                    keyboardType='numeric'
                 />
                   <TextInput
                  style={{ width: 50, margin: 10,  textAlign:'center',  borderColor: 'gray', borderWidth: 1, borderRadius: 15,
                    }}
                    keyboardType='numeric'
                 />
                  

              </View>
              <View style={{flexDirection:'row', margin: 15}}>
              <Text style={{fontSize: 14, color:'gray', textAlign:'center'}}>No Email Recived?</Text>
              <Text style={{fontSize: 14, color:'#1e2b6b', textAlign:'center'}}> Resend Code</Text>
              </View>
              <TouchableOpacity
              onPress={this.gotoDashboard.bind(this)} 
              style={{backgroundColor:'#1e2b6b', padding: 10, borderRadius: 15, width:'30%', margin:10 }} > 
                <Text style={{textAlign:'center', fontSize: 16, fontWeight:'bold', color:'#ededed'}} >Submint</Text>
              </TouchableOpacity>

              
              

             
             
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