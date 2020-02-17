import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import logo from '../../assets/images/logo.png';

import { Wrapper, Container, CartIcon, Logo, Badge } from './styles';

class Header extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func
    }).isRequired
  };

  state = {};

  navigateToHome = () => {
    const { navigation } = this.props;
    navigation.navigate('Main');
  };

  navigateToCart = () => {
    const { navigation } = this.props;
    navigation.navigate('Cart');
  };

  render() {
    const { cartSize } = this.props;

    return (
      <Wrapper>
        <Container>
          <Logo onPress={this.navigateToHome}>
            <Image
              source={logo}
              resizeMode="cover"
              style={{ width: 185, height: 24 }}
            />
          </Logo>
          <CartIcon onPress={this.navigateToCart}>
            <Icon name="shopping-basket" size={30} color="#FFF" />
            <Badge>{cartSize}</Badge>
          </CartIcon>
        </Container>
      </Wrapper>
    );
  }
}
const mapStateToProps = state => ({
  cartSize: state.cart.length
});

export default connect(mapStateToProps)(Header);
