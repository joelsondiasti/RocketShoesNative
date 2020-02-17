import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../utils/format';
import {
  Container,
  EmptyCart,
  EmptyLabel,
  CartContainer,
  CartList,
  CartItem,
  CardHeader,
  ItemImage,
  ItemPrice,
  ItemTitle,
  Description,
  TrashButton,
  CardFooter,
  Amount,
  AmountCount,
  AddButton,
  RemoveButon,
  SubTotal,
  TotalContainer,
  TotalText,
  TotalValue,
  FinishButton,
  FinishButtonText
} from './styles';

import * as CartActions from '../../store/modules/cart/actions';

class Cart extends Component {
  state = {};

  render() {
    const { cart, total, removeFromCart, updateAmountRequest } = this.props;
    function increment(product) {
      updateAmountRequest(product.id, product.amount + 1);
    }
    function decrement(product) {
      updateAmountRequest(product.id, product.amount - 1);
    }

    return (
      <Container>
        {cart <= 0 ? (
          <EmptyCart>
            <Icon
              name="shopping-cart"
              size={150}
              color="rgba(255,255,255,0.5)"
            />
            <EmptyLabel>Seu carrinho está vazio</EmptyLabel>
          </EmptyCart>
        ) : (
          <CartContainer>
            <CartList
              data={cart}
              renderItem={({ item }) => (
                <CartItem>
                  <CardHeader>
                    <ItemImage source={{ uri: item.image }} />
                    <Description>
                      <ItemTitle>{item.title}</ItemTitle>
                      <ItemPrice>{item.priceFormatted}</ItemPrice>
                    </Description>
                    <TrashButton onPress={() => removeFromCart(item.id)}>
                      <Icon name="delete-forever" size={30} color="#7159c1" />
                    </TrashButton>
                  </CardHeader>
                  <CardFooter>
                    <Amount>
                      <RemoveButon onPress={() => decrement(item)}>
                        <Icon
                          name="remove-circle-outline"
                          size={20}
                          color="#7159c1"
                        />
                      </RemoveButon>
                      <AmountCount>{item.amount}</AmountCount>
                      <AddButton onPress={() => increment(item)}>
                        <Icon
                          name="add-circle-outline"
                          size={20}
                          color="#7159c1"
                        />
                      </AddButton>
                    </Amount>
                    <SubTotal>{item.subtotal}</SubTotal>
                  </CardFooter>
                </CartItem>
              )}
              keyExtractor={item => String(item.id)}
            />
            <TotalContainer>
              <TotalText>TOTAL</TotalText>
              <TotalValue>{total}</TotalValue>
              <FinishButton>
                <FinishButtonText>FINALIZAR PEDIDO</FinishButtonText>
              </FinishButton>
            </TotalContainer>
          </CartContainer>
        )}
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount)
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  )
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
