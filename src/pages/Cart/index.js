import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount)
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((prodTotal, product) => {
        return prodTotal + product.price * product.amount;
      }, 0)
    )
  );

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }
  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      {cart <= 0 ? (
        <EmptyCart>
          <Icon name="shopping-cart" size={150} color="rgba(255,255,255,0.5)" />
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
                  <TrashButton
                    onPress={() =>
                      dispatch(CartActions.removeFromCart(item.id))
                    }
                  >
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
