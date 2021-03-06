import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {color, size, compose, space, flexbox, layout, borderRadius, position} from 'styled-system';

const Button = styled(TouchableOpacity)(compose(color, size, space, flexbox, layout, borderRadius,position));

Button.defaultProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};

export default Button;
