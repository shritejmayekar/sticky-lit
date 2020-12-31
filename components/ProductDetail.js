import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {BASE_URL} from '../config';
import {Card} from './Card';

export function ProductDetail({product, onPress}) {
  return (
    <Card style={styles.card} onPress={onPress}>
      <Image
        style={styles.thumb}
        source={{uri:product.imageURL}}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>&#8377;&nbsp;{product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
        
      </View>
      

     
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 20,
  },
  thumb: {
    height: 550,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    resizeMode:'cover'
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
  },
});
