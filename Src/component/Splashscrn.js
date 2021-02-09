import React, {Component} from 'react';
import {
   StyleSheet,
    ScrollView,
    View,Text,Image
  } from 'react-native';
import { Actions } from 'react-native-router-flux';

const frontpage=()=>{
  Actions.frontpage();
}




export default class Splashscreen extends Component {
 
  componentDidMount () {
    setTimeout(frontpage, 1000);
  }

  render() {
    return (
      <ScrollView style={styles.vb}> 
     <View style={styles.main}>
     <Image
              style={styles.button}
              source={require('..//assets/logo.png')}
            />
    <Text style={styles.textf}>Task</Text>
        </View>
      
       
      </ScrollView>
      
    );
  }
  }
  const styles = StyleSheet.create({
    vb:{
      backgroundColor: '#5999ff',
    },
    textf:{
      margin:20,
      fontSize:30,
      color:'white',
      textAlign:'center'
      
      
    },
      main:{
        margin:15,
        flexWrap:'wrap',
        alignSelf:'center',
      },
      button:{
        marginTop:80,
        width:190,
        height:190,
        alignContent:'center',
        alignItems:'center',
        alignSelf:'center',
        
    },
    foot:{
      fontSize:12,
     marginTop:200,
      alignContent:'center',
      alignItems:'center',
      alignSelf:'center',
      color:'white'
      
    },

  
    
    });
    
