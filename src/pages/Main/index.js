import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import api from '../../services/api';
import { formatPrice } from '../../utils/format';

import * as CartActions from '../../store/modules/cart/actions';

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

class Main extends Component {
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

    this.setState({ products: data });
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;
    addToCartRequest(id);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

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
              <BuyButton onPress={() => this.handleAddProduct(item.id)}>
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
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {})
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
