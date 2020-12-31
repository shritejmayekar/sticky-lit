import React from 'react';
import {FlatList, StyleSheet, View,Text} from 'react-native';

import {HeaderIconButton} from '../components/HeaderIconButton';
import {AuthContext} from '../contexts/AuthContext';
import {ProductDetail} from '../components/ProductDetail';
import {HeaderIconsContainer} from '../components/HeaderIconsContainer';
import {ThemeContext} from '../contexts/ThemeContext';
import { ScrollView } from 'react-native-gesture-handler';
import { FilledButton } from '../components/FilledButton';

export function ProductDetailScreen({route,navigation}) {
  const {logout} = React.useContext(AuthContext);
  const switchTheme = React.useContext(ThemeContext);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderIconsContainer>
          <HeaderIconButton
            name={'color-palette'}
            onPress={() => {
              switchTheme();
            }}
          />
          <HeaderIconButton
            name={'log-out'}
            onPress={() => {
              logout();
            }}
          />
        </HeaderIconsContainer>
      ),
    });
  }, [navigation, logout, switchTheme]);
  const { product } = route.params;

  
  return (
      <View style={styles.container}>
      <ScrollView style={styles.productsListContainer}>
             <ProductDetail product={JSON.parse(product)}  />

      <FilledButton title={'Add to Cart'} style={styles.addToCartButton} onPress={()=>{}} />

         

      </ScrollView>
      </View>

  );
}

const styles = StyleSheet.create({
  container:{
      flex:1
  },
  productsListContainer: {
    marginTop:0,
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  addToCartButton:{
    width:'100%',                          
    position: 'absolute', 
    bottom:30                      
    // bottom: 10,                                                    
    // right: 10,
    // zIndex:66
}
});
