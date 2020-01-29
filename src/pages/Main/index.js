import React, { Component } from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import api from '../../services/api';
import { formatPrice } from '../../utils/format';

import {
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

export default class Main extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    }).isRequired
  };

  state = {
    products: []
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price)
    }));

    console.tron.log(data);

    this.setState({ products: data });
  }

  handleAddCart = product => {
    const { navigation } = this.props;
    navigation.navigate('Cart', { product });
  };

  render() {
    const { products } = this.state;
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
              <BuyButton onPress={() => this.handleAddCart()}>
                <AmountCart>
                  <Icon name="add-shopping-cart" size={20} color="#FFF" />
                  <AmountCartText>1</AmountCartText>
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
}
