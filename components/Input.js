import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';

export function Input({  style, ...props }) {
    return <TextInput {...props} style={[styles.input,style]} />
       
    
}

const styles = StyleSheet.create({
   input:{
      backgroundColor:'#e8e8e8',
      width:'100%',
      padding:20,
      borderRadius:8
   }
});
