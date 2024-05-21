/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



function App(): JSX.Element {
  const [randomColor,setrandomColor]=useState("#ffffff");
  const generateColor=()=>{
    const letters='0123456789ABCDEF';
      let color='#';
      for(let i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*16)]
      }

      setrandomColor(color);
  }
  return (
    <>
    <StatusBar backgroundColor={randomColor} />
    
      
      <View style={[styles.container,{backgroundColor:randomColor}]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionTxt}>Click Me</Text>
          </View>
          
        </TouchableOpacity>
      </View>
         
    

    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'

  },
  actionBtn:{
    
    backgroundColor:'#333',
    paddingHorizontal:20,
    paddingVertical:10,
    borderRadius:8

  },
  actionTxt:{
    color:'#fff',
    fontSize:20,
    fontWeight:'bold'
    
  }
});

export default App;
