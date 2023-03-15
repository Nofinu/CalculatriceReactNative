import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Button(props) {

  const color={backgroundColor: props.color,borderRadius:props.radius,}
  const textColor={color: props.textColor? props.textColor : "black"}

  return (
    <Pressable style={[styles.container,color]} onPress={()=>props.addText(props.text)}>
      <View>
        <Text style={[styles.text,textColor]}>{props.text}</Text>
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
  }
})