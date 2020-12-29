import React from 'react';
import {View, StyleSheet,Text} from 'react-native';
import {useTheme} from '@react-navigation/native';

export function SplashScreen() {
  const {colors} = useTheme();
  return (<View style={[styles.container, {backgroundColor: colors.primary}]} >
                <Text style={styles.text}>E-Store</Text>

  </View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text:{
    textAlign:'center',
    alignContent:'center',
    color:'white',
    fontSize:60,
    marginTop:120,
    marginVertical: 20,

  }
});
