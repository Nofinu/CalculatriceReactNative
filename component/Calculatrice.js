import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Button from './Button'

export default function Calculatrice() {

  const [calcul,setCalcul]=useState("")
const [lastOperator,setLastOperator]=useState(true)

  const btnTab=[
    {text:"Ac",color:"grey",radius:"square",id:1 ,textColor:true},
    {text:"(",color:"lightGrey",radius:"square",id:2 ,textColor:true},
    {text:")",color:"lightGrey",radius:"square",id:3 ,textColor:true},
    {text:"/",color:"blue",radius:"square",id:4 ,textColor:true},
    {text:"7",color:"white",radius:"rounded",id:5 ,textColor:false},
    {text:"8",color:"white",radius:"rounded",id:6 ,textColor:false},
    {text:"9",color:"white",radius:"rounded",id:7 ,textColor:false},
    {text:"X",color:"blue",radius:"square",id:8 ,textColor:true},
    {text:"4",color:"white",radius:"rounded",id:9 ,textColor:false},
    {text:"5",color:"white",radius:"rounded",id:10,textColor:false},
    {text:"6",color:"white",radius:"rounded",id:11 ,textColor:false},
    {text:"-",color:"blue",radius:"square",id:12 ,textColor:true},
    {text:"1",color:"white",radius:"rounded",id:13 ,textColor:false},
    {text:"2",color:"white",radius:"rounded",id:14 ,textColor:false},
    {text:"3",color:"white",radius:"rounded",id:15 ,textColor:false},
    {text:"+",color:"blue",radius:"square",id:16 ,textColor:true},
    {text:".",color:"white",radius:"rounded",id:17 ,textColor:false},
    {text:"0",color:"white",radius:"rounded",id:18 ,textColor:false},
    {text:"Del",color:"white",radius:"rounded",id:19 ,textColor:false},
    {text:"=",color:"blue",radius:"square",id:20 ,textColor:true},
    ]

    const operator = ["/","-","+",".","X"]

    const textWidth = {fontSize: (50 - (calcul.length>0 ? Math.floor(calcul.length/1.2):0)),color:(calcul === ""?"#4E4E4F":"white")}



const addText=(text)=>{
  if(text==="Ac"){
    setCalcul("")
    setLastOperator(true)
  }
  else if(text==="Del"){
    setCalcul(calcul.substring(0,calcul.length-1))
    if(operator.find(e=> e === calcul[calcul.length-2])){
      setLastOperator(true)
    }
    else{
      setLastOperator(false)
    }
  }
  else if (text === "="){
    setCalcul(eval(calcul))
    setLastOperator(false)
  }
  else{
    if(operator.find(e => e === text) && !lastOperator){
      console.log(lastOperator)
      setLastOperator(true)
      if(text === "X"){
        setCalcul(calcul+"*")
      }
      else{
        setCalcul(calcul+text)
      }
    }
    else{
      if( operator.find(e => e === text) === undefined){
        setCalcul(calcul+text)
        setLastOperator(false)
      }
    }
  }
}

  return (
    <View style={styles.globalContainer}>
      <Text style={styles.containerTitle}>Calculatrice</Text>
      <View style={styles.textContainer}>
        <Text style={[styles.text,textWidth]}>{calcul === ""?0:calcul}</Text>
      </View>
      <View style={styles.btnContainer}>
        {btnTab.map(btn => <Button addText={addText} key={btn.id} text={btn.text} color={btn.color} radius={btn.radius} textColor={btn.textColor} id={btn.id}/>)}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  globalContainer:{
    flexDirection:"column",
    justifyContent:"space-evenly",
    alignItems:"center"
  },
  containerTitle:{
    color:"white",
    fontSize:35
  },
  btnContainer:{
    justifyContent:"space-evenly",
    width:"85%",  
    flexDirection:"row",
    flexWrap:"wrap",
  },
  textContainer:{
    marginTop:"20%",
    height:"20%",
    width:"100%",
    flexDirection:"row-reverse",
    alignItems:"center"
  },
  text:{
    marginRight:"5%"
  },
})