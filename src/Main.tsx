import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import InputBox from './components/InputBox';
import FormCheckBox from './components/FormCheckBox';
import Output from './components/Output';
import {generatePasswordString} from './utility/passwordGenerator';
import {PasswordRequirement} from './utility/Consts';

function Main(): React.JSX.Element {
  const [length, setLength] = useState('');
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [passwordOptions, setPasswordOptions] = useState<PasswordRequirement>({
    length: 2,
    includeUpper: false,
    includeLower: false,
    includeNumber: false,
    includeSymbol: false,
  });

  const GeneratePassword = () => {
    const newPassword = generatePasswordString(passwordOptions);
    setGeneratedPassword(newPassword);
    console.log(length);
  };

  //Used Chat GPT to get format this method.
  const toggleOption = (
    option: keyof Omit<PasswordRequirement, 'length'>,
    value: boolean,
  ) => {
    setPasswordOptions(prevOptions => ({
      ...prevOptions,
      [option]: value,
    }));
  };

  const Copy = () => {
    console.log('Copied');
  };

  return (
    <View>
      <Text>Password Generator</Text>
      <InputBox onLengthChange={setLength} />
      <FormCheckBox
        color={'#0000FF'}
        text="Upper Case Letter"
        id="Upper"
        onChange={value => toggleOption('includeUpper', value)}
      />
      <FormCheckBox
        color={'#008000'}
        text="Lower Case Letter"
        id="Lower"
        onChange={value => toggleOption('includeLower', value)}
      />
      <FormCheckBox
        color={'#FFA500'}
        text="Special Character"
        id="Special"
        onChange={value => toggleOption('includeSymbol', value)}
      />
      <FormCheckBox
        color={'#800080'}
        text="Numbers"
        id="Numbers"
        onChange={value => toggleOption('includeNumber', value)}
      />
      <Output
        generatedPassword={generatedPassword}
        placeholder="Select Options..."
        handleCopy={Copy}
      />
      <Pressable style={styles.button} onPress={GeneratePassword}>
        <Text>Generate Password</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1E90FF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
});

export default Main;
