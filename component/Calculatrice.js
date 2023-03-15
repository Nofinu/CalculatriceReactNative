import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Button from './Button'

export default function Calculatrice() {

  const [calcul,setCalcul]=useState("")
const [lastOperator,setLastOperator]=useState(true)

  const btnTab=[
    {text:"Ac",color:"#232227",radius:10,id:1 ,textColor:"white"},
    {text:"(",color:"#2E2E3A",radius:10,id:2 ,textColor:"white"},
    {text:")",color:"#2E2E3A",radius:10,id:3 ,textColor:"white"},
    {text:"/",color:"#658A83",radius:10,id:4 ,textColor:"white"},
    {text:"7",color:"white",radius:100,id:5 },
    {text:"8",color:"white",radius:100,id:6 },
    {text:"9",color:"white",radius:100,id:7 },
    {text:"X",color:"#658a83",radius:10,id:8 ,textColor:"white"},
    {text:"4",color:"white",radius:100,id:9 },
    {text:"5",color:"white",radius:100,id:10},
    {text:"6",color:"white",radius:100,id:11 },
    {text:"-",color:"#658A83",radius:10,id:12 ,textColor:"white"},
    {text:"1",color:"white",radius:100,id:13 },
    {text:"2",color:"white",radius:100,id:14 },
    {text:"3",color:"white",radius:100,id:15 },
    {text:"+",color:"#658A83",radius:10,id:16 ,textColor:"white"},
    {text:".",color:"white",radius:100,id:17 },
    {text:"0",color:"white",radius:100,id:18 },
    {text:"Del",color:"white",radius:100,id:19 },
    {text:"=",color:"#658A83",radius:10,id:20 ,textColor:"white"},
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