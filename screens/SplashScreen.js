import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';

export function SplashScreen() {
  const { colors } = useTheme();
  return (<View style={[styles.container, { backgroundColor: 'white' }]} >
    <Image
      style={styles.thumb}
      source={require('../assets/eStoreLogo.png')}
    />

  </View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',

  },
  text: {
    textAlign: 'center',
    alignContent: 'center',
    color: 'white',
    fontSize: 60,
    marginTop: 120,
    marginVertical: 20,

  },
  thumb: {
    width: 150,
    height: 150,
  },
});
