import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';



const passwordItem = ({data, removePassword}) => {

  const [showPassword, setShowPassword] = useState (true);

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <Pressable onLongPress={removePassword} style={styles.container}>
          {showPassword ? (
            <Text style={{color: "#fff", fontSize: 18}}>{data}</Text>
          ):(
            <View style={{
              backgroundColor: "#fff", 
              height: "80%", 
              paddingRight: 185,
              borderRadius: 5}}>
            </View>
          )}
        
        <TouchableOpacity onPress={handleShowPassword}>
           <Ionicons
            name={showPassword ? "eye-sharp" : "eye-off-sharp"}
            size={25}
            color="#fff"           
           />
        </TouchableOpacity>
    </Pressable>
  )
}

const styles = StyleSheet.create({
   container: {
    backgroundColor: "#0e0e0e",
    padding: 14,
    width: "100%",
    marginBottom: 14,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between"
   },
   
})

export default passwordItem;