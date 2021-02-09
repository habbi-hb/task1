  
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, 
    View, FlatList, TouchableOpacity, ScrollView, Button, ToastAndroid,
    Image, SafeAreaView } from 'react-native';

import Drawer from 'react-native-drawer'
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';
console.disableYellowBox = true;



export default class Dashboard extends Component {

    constructor(props) {
        super(props)

    }
    gotoRegister=()=>{
        Actions.register();
      }
      gotohelp=()=>{
        Actions.help();
      }
      gotoRanking=()=>{
        Actions.ranking();
      }

      
    
    renderDrawer() {
        //SlideMenu
        return (
            <View style={styles.menuContainer}>
               <View style={{flexDirection:'row', borderBottomWidth: 1, borderBottomColor:'gray',
           }}>
               <Image
            source={require('../assets/logo.png')}
            style={{ width: 100, height: 100,alignSelf:'center', margin: 20, borderRadius: 50}}
          />
           <Text
               style={{alignSelf:'center',marginTop:10,fontSize:20,fontWeight:'bold',}}
             >UPA </Text> 
             </View>

           <View style={{margin: 15}}>
             <TouchableOpacity style={styles.dbutton} >
            
           <Text style={styles.sideMenuContentItem}>
             Dashboard
           </Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.dbutton}
           onPress={this.gotoRegister.bind(this)} >
         
           <Text  style={styles.sideMenuContentItem}>
             Register
             
           </Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.dbutton} 
           onPress={this.gotoRanking.bind(this)} >
           
           <Text style={styles.sideMenuContentItem}>
             Ranking
           </Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.dbutton} 
           onPress={this.gotohelp.bind(this)} >
           
           <Text  style={styles.sideMenuContentItem}>
             Help 
           </Text>
           </TouchableOpacity>
           </View>
                 
         
        
            </View>
        )
    }

    openDrawer() {
        this.drawer.open()
    }

    closeDrawer() {
        this.drawer.close()
    }

    copyToClipboard = () => {
       
        ToastAndroid.showWithGravity(
          "Toast!",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      }
    render() {
      
        return (
            <SafeAreaView style={styles.safeAreaStyle}>
                <View style={styles.mainContainer}>
                    <Drawer
                        ref={(ref) => this.drawer = ref}
                        content={this.renderDrawer()}
                        type='static'
                        tapToClose={true}
                        openDrawerOffset={0.35}
                        styles={drawerStyles}>
                        {/* //Main View */}
                        <View style={styles.headerContainer}>
                            <View style={styles.menuButton}>
                                <TouchableOpacity
                                    onPress={this.openDrawer.bind(this)}>
                                        <Icon  size={30} color="#ededed" name="ios-list" />
                                   
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.headerTitle}>Dashboard</Text>
                            <View style={styles.menuButton} />
                            
                        </View>
                        <View>
                           
                        </View>
                        <View style={{alignItems:'center'}}>
                               
                                <TouchableOpacity style={{
                                    borderWidth: 1,
                                    padding:15,
                                     margin:15,
                                      backgroundColor:'white',
                                      shadowColor: "#000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 12,
                                        },
                                        shadowOpacity: 0.58,
                                        shadowRadius: 16.00,

                                        elevation: 24,
                                    }}
                                onPress={() => this.copyToClipboard()}>
                                    <Text style={{fontSize:30}}>Toast</Text>
                                </TouchableOpacity>
             
                            </View>
                    </Drawer>
                </View>
            </SafeAreaView>
        );
    }
}

const drawerStyles = {
    drawer: {
        flex: 1.0,
        backgroundColor: '#3B5998',
    },
    main: {
        flex: 1.0,
        backgroundColor: 'white'
    }
}

const styles = {
    mainContainer: {
        flex: 1.0,
        backgroundColor: 'white'
    },
    safeAreaStyle: {
        flex: 1.0,
        backgroundColor: '#3B5998',
    },
    headerContainer: {
        height: 44,
        flexDirection: 'row',
        justifyContect: 'center',
        backgroundColor: '#3B5998',
    },
    headerTitle: {
        flex: 1.0,
        textAlign: 'center',
        alignSelf: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight:'bold'
    },
    menuButton: {
        marginLeft: 8,
        marginRight: 8,
        alignSelf: 'center',
        tintColor: 'white'
    },
    menuContainer: {
        flex: 1.0,
        backgroundColor: 'white',
    },
    sideMenuContentItem:{
        margin:10,
        fontSize:15,
        fontWeight:'bold',
        
      },
     
     
    
}

