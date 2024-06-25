import { View, Text ,StyleSheet, TextInput, Button } from 'react-native'
import React from 'react'
import { useState } from 'react'

import { Link } from 'expo-router'

const Main = () => {
  const[text, setText]= useState<String>("")
  return (
<View style={styles.container}>

<Text style={styles.text} > Type anything!</Text>
<TextInput multiline={true} style={styles.textInput} value={text} onChangeText={setText}/> 
<Button title='Save Note' onPress={()=>console.log('save the note', text)}/>
</View>

  );

}

export default Main
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
    alignItems :'center',
    justifyContent:'center',
  },
  textInput:{
    backgroundColor:"#ffb70342",
    width:"100%",
    height:200,
    fontSize: 26,
    paddingHorizontal:20,
    paddingTop:20,
    paddingBottom:20,
    textAlignVertical:'top'
  
  },
  text:{
    fontSize:18
  }
})