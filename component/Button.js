import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Button(props) {

  return (
    <Pressable style={[styles.container, props.radius === "rounded"? styles.rounded : styles.square, props.color === "white"? styles.bgWhite : props.color === "blue" ? styles.bgBlue : props.color === "lightGrey"? styles.bgLightGrey : styles.bgGrey]} onPress={()=>props.addText(props.text)}>
      <View>
        <Text style={[styles.text, props.textColor ? styles.textColorWhite : styles.textColor]}>{props.text}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container:{
    width:70,
    height:70,
    marginRight:5,
    marginLeft:5,
    marginBottom:15,
    padding:15,
    justifyContent:"center",
    alignItems:"center",
  },
  text:{
    fontSize:20,
    fontWeight:"bold",
  },
  textColorWhite:{
    color:"white",
  },
  textColor:{
    color:"black"
  },
  square:{
    borderRadius:10,
  },
  rounded:{
    borderRadius:100,
  },
  bgWhite:{
    backgroundColor:"white"
  },
  bgLightGrey:{
    backgroundColor:"#2E2E3A",
  },
  bgGrey:{
    backgroundColor:"#232227",
  },
  bgBlue:{
    backgroundColor:"#658A83",
  }
})