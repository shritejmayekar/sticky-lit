import React from 'react';
import {FlatList, StyleSheet,Image} from 'react-native';

import {HeaderIconButton} from '../components/HeaderIconButton';
import {AuthContext} from '../contexts/AuthContext';
import {Product} from '../components/Product';
import {useGet} from '../hooks/useGet';
import {HeaderIconsContainer} from '../components/HeaderIconsContainer';
import {ThemeContext} from '../contexts/ThemeContext';

export function ProductsListScreen({navigation}) {
  const {logout} = React.useContext(AuthContext);
  const switchTheme = React.useContext(ThemeContext);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      // headerLeft:() => (
      //   <HeaderIconsContainer>
      //   <Image
      //   style={styles.imageLogo}
      //   source={require('../assets/eStoreLogo.png')}
      // />
      // </HeaderIconsContainer>
      // ),
      headerRight: () => (
        
        <HeaderIconsContainer>
            <Image
        style={styles.imageLogo}
        source={require('../assets/eStoreLogo.png')}
      />
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
  const products = useGet('/product');

  function renderProduct({item: product}) {
    return <Product product={product} onPress={
      () => navigation.navigate("ProductDetailScreen", {"product":JSON.stringify(product)})

    } />;
  }

  return (
    <FlatList
      contentContainerStyle={styles.productsListContainer}
      data={products.results}
      renderItem={renderProduct}
      keyExtractor={product => `${product.id}`}
    />
  );
}

const styles = StyleSheet.create({
  productsListContainer: {
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  imageLogo: {
    marginRight:75,
    width: 43,
    height: 43,
  },
});
