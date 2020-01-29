import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
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

export default class Cart extends Component {
  state = {
    cart: [
      {
        id: 1,
        title: 'Tênis de Caminhada Leve Confortável',
        price: 'R$ 179,90',
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg'
      },
      {
        id: 2,
        title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
        price: 'R$ 139,00',
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg'
      },
      {
        id: 3,
        title: 'Tênis Adidas Duramo Lite 2.0',
        price: 'R$ 219,90',
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg'
      },
      {
        id: 4,
        title: 'Tênis Adidas Duramo Lite 2.0',
        price: 'R$ 216,90',
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg'
      }
    ]
  };

  render() {
    const { cart } = this.state;
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
                      <ItemPrice>{item.price}</ItemPrice>
                    </Description>
                    <TrashButton>
                      <Icon name="delete-forever" size={30} color="#7159c1" />
                    </TrashButton>
                  </CardHeader>
                  <CardFooter>
                    <Amount>
                      <RemoveButon>
                        <Icon
                          name="remove-circle-outline"
                          size={20}
                          color="#7159c1"
                        />
                      </RemoveButon>
                      <AmountCount>3</AmountCount>
                      <AddButton>
                        <Icon
                          name="add-circle-outline"
                          size={20}
                          color="#7159c1"
                        />
                      </AddButton>
                    </Amount>
                    <SubTotal>R$ 100,00</SubTotal>
                  </CardFooter>
                </CartItem>
              )}
              keyExtractor={item => String(item.id)}
            />
            <TotalContainer>
              <TotalText>TOTAL</TotalText>
              <TotalValue>R$1619,10</TotalValue>
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
