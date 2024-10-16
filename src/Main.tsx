import React from 'react';
import {View, Text} from 'react-native';
import InputBox from './components/InputBox';
import FormCheckBox from './components/FormCheckBox';

function Main(): React.JSX.Element {
  return (
    <View>
      <Text>Password Generator</Text>
      <InputBox />
      <FormCheckBox color={'Blue'} />
      <FormCheckBox color={'Green'} />
      <FormCheckBox color={'Orange'} />
      <FormCheckBox color={'Purple'} />
    </View>
  );
}

export default Main;
