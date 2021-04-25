import {TextInput} from 'react-native';
import styled from 'styled-components/native';
import {
  color,
  size,
  compose,
  space,
  typography
} from 'styled-system';
import theme from '../components/utils/theme';

const Input = styled(TextInput).attrs(props => ({
  placeholderTextColor: theme.colors[props.placeholderTextColor] || '#999'
})) (
  compose(
    color,
    size,
    space,
    typography
  )
);

export default Input;
