import React from 'react';
import { Image } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import logo from '../../assets/images/logo.png';

import { Wrapper, Container, CartIcon, Logo, Badge } from './styles';

export default function Header({ navigation }) {
  function navigateToHome() {
    navigation.navigate('Main');
  }

  function navigateToCart() {
    navigation.navigate('Cart');
  }

  const cartSize = useSelector(state => state.cart.length);

  return (
    <Wrapper>
      <Container>
        <Logo onPress={navigateToHome}>
          <Image
            source={logo}
            resizeMode="cover"
            style={{ width: 185, height: 24 }}
          />
        </Logo>
        <CartIcon onPress={navigateToCart}>
          <Icon name="shopping-basket" size={30} color="#FFF" />
          <Badge>{cartSize}</Badge>
        </CartIcon>
      </Container>
    </Wrapper>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  }).isRequired
};
