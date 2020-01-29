import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Wrapper = styled.SafeAreaView`
  flex: 0;
  flex-direction: row;
`;

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #141419;
  height: 60px;
`;

export const CartIcon = styled(RectButton)`
  z-index: 0;
  align-items: flex-end;
  justify-content: center;
  width: 30px;
  height: 30px;
`;

export const Badge = styled.Text`
  background: #7159c1;
  position: absolute;
  right: -5px;
  top: -5px;
  z-index: 1;
  color: #fff;
  min-width: 18px;
  max-height: 18px;
  border-radius: 10px;
  text-align: center;
`;

export const Logo = styled(RectButton)``;
