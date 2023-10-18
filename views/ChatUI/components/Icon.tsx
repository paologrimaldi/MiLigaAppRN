import React from 'react';
import Icon6 from 'react-native-vector-icons/FontAwesome6';
import {IconT} from '.../../../types';

const Icon = ({color, name, size, style}: IconT) => (
  <Icon6 name={name} size={size} color={color} style={style} />
);

export default Icon;
