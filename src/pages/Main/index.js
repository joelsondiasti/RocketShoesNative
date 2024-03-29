import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Image, ToastAndroid } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import api from '../../services/api';
import { formatPrice } from '../../utils/format';

import * as CartActions from '../../store/modules/cart/actions';

import {
  LoadingText,
  Loading,
  Container,
  ProductList,
  CardItem,
  ItemText,
  ItemPrice,
  BuyButton,
  AmountCart,
  AmountCartText,
  BuyButtonText
} from './styles';

export default function Main() {
  const [products, setProducts] = useState([]);
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await api.get('products');

        const data = response.data.map(product => ({
          ...product,
          priceFormatted: formatPrice(product.price)
        }));

        setProducts(data);
      } catch (error) {
        ToastAndroid.showWithGravityAndOffset(
          'Network Error - Server is not available',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          0,
          50
        );
      }
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }
  if (products.length === 0) {
    return (
      <Loading>
        <Icon name="autorenew" size={40} color="#fff" />
        <LoadingText>Carregando...</LoadingText>
      </Loading>
    );
  }
  return (
    <Container>
      <ProductList
        data={products}
        renderItem={({ item }) => (
          <CardItem>
            <Image
              source={{ uri: item.image }}
              style={{ width: 200, height: 200 }}
            />
            <ItemText>{item.title}</ItemText>
            <ItemPrice>{item.priceFormatted}</ItemPrice>
            <BuyButton onPress={() => handleAddProduct(item.id)}>
              <AmountCart>
                <Icon name="add-shopping-cart" size={20} color="#FFF" />
                <AmountCartText>{amount[item.id] || 0}</AmountCartText>
              </AmountCart>
              <BuyButtonText>ADICIONAR</BuyButtonText>
            </BuyButton>
          </CardItem>
        )}
        keyExtractor={item => String(item.id)}
      />
    </Container>
  );
}

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired
};
