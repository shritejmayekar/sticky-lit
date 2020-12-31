import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ProductsListScreen} from '../screens/ProductsListScreen';
import { ProductDetailScreen } from '../screens/ProductDetail';

const MainStack = createStackNavigator();

export function MainStackNavigator() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name={'ProductsList'}
        component={ProductsListScreen}
        options={{
          title: 'Products List',
        }}
      />
      <MainStack.Screen
        name={'ProductDetail'}
        component={ProductDetailScreen}
        options={{
          title:'Product Detail',
        }}
        />
    </MainStack.Navigator>
  );
}
