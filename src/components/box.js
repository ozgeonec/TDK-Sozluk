import {View} from 'react-native';
import styled from 'styled-components/native';
import {
  color,
  size,
  compose,
  space,
  flexbox,
  borderRadius,
  border
} from 'styled-system';

const Box = styled(View)(compose(color, size, space, flexbox, borderRadius, border));

export default Box;
