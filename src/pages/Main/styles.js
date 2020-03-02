import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

// import { darken } from 'polished';

export const Loading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #191920;
`;
export const LoadingText = styled.Text`
  color: #fff;
`;

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #191920;
`;

export const ProductList = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false
})`
  flex: 1;
  max-height: 380px;
  margin-top: 30px;
`;

export const CardItem = styled.View`
  margin-top: 20px;
  padding: 10px;
  background: #fff;
  border-radius: 5px;
  width: 220px;
  height: auto;
  margin-right: 20px;
`;

export const ItemText = styled.Text`
  font-size: 14px;
  color: #222;
  margin-bottom: 5px;
`;

export const ItemPrice = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #444;
`;

export const BuyButton = styled(RectButton)`
  border: 0;
  border-radius: 4px;
  background: #7159c1;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;

  margin-top: auto;
`;

export const AmountCart = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.1);
  padding: 10px;
`;
export const AmountCartText = styled.Text`
  color: #fff;
  margin-left: 5px;
`;

export const BuyButtonText = styled.Text`
  color: #fff;
  text-align: center;
  flex: 1;
  font-weight: bold;
`;
