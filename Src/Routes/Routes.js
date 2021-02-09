import React, {Component} from 'react';
import {Platform, StyleSheet, Linking,Image,TouchableOpacity, Text, View} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
import Dashboard from '../component/Dashboard';
import Help from '../component/help';
import Homepage from '../component/Homepage';
import OTP from '../component/otp';
import Ranking from '../component/Ranking';
import Register from '../component/Rigester';
import Splashscreen from '../component/Splashscrn';














export const Routes = () => (
    <Router navigationBarStyle={styles.navBar} titleStyle={styles.navBarTitle}>
    <Scene key='root' >



    <Scene key='splash'  component={Splashscreen} initial={true} hideNavBar/>
    <Scene key='frontpage' component={Homepage} hideNavBar />
    <Scene key='otp' component={OTP} hideNavBar />
    <Scene key='register' component={Register} hideNavBar />
    <Scene key='dashboard' component={Dashboard} hideNavBar />
    <Scene key='help' component={Help} hideNavBar />
    <Scene key='ranking' component={Ranking} hideNavBar />
   
</Scene>


</Router>

)
const styles = StyleSheet.create({
    navBar: {
        backgroundColor:'#5999ff',
    },
    navBarTitle:{
        color:'#FFFFFF'
    },
    
          });
