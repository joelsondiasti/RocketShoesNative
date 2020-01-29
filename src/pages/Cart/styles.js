import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #191920;
`;

export const EmptyCart = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const EmptyLabel = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const CartContainer = styled.View`
  background: #fff;
  border-radius: 5px;
  margin-top: 50px;
  max-height: 600px;
`;

export const CartList = styled.FlatList`
  max-height: 300px;
`;

export const CartItem = styled.View`
  padding: 10px;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 10px;
  /* background: rgba(0, 0, 0, 0.3); */
`;
export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`;
export const ItemImage = styled.Image`
  width: 70px;
  height: 70px;
`;
export const Description = styled.View`
  flex: 1;
  padding: 0 10px;
`;
export const ItemPrice = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const ItemTitle = styled.Text``;
export const TrashButton = styled(RectButton)``;

export const CardFooter = styled.View`
  flex-direction: row;
  background: #eee;
  margin-top: 15px;
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
`;
export const Amount = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const AmountCount = styled.TextInput.attrs({
  editable: false
})`
  color: #000;
  font-size: 12px;
  text-align: center;
  border: 1px #999 solid;
  border-radius: 5px;
  padding: 0;
  width: 40px;
  height: 30px;
  margin: 0 5px;
`;
export const AddButton = styled(RectButton)``;
export const RemoveButon = styled(RectButton)``;
export const SubTotal = styled.Text`
  font-weight: bold;
  font-size: 18px;
  margin-right: 10px;
`;

export const TotalContainer = styled.View`
  align-items: center;
  margin-top: 30px;
`;
export const TotalText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #999;
`;
export const TotalValue = styled.Text`
  font-weight: bold;
  font-size: 24px;
  color: #000;
  margin-bottom: 20px;
`;
export const FinishButton = styled(RectButton)`
  background: #7159c1;
  border-radius: 5px;
  border: none;
  display: flex;
  align-self: stretch;
  padding: 20px;
  margin: 10px;
`;
export const FinishButtonText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #fff;
  text-align: center;
`;
