import React from 'react';
import {View, Text} from 'react-native';

const ItensCep = props => {
  return (
    <View>
      <Text>Seu cep é: {props.cep}</Text>
    </View>
  );
};

export default ItensCep;
