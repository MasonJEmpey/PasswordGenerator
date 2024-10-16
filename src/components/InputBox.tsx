import {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

function InputBox() {
  const [inputText, setInputText] = useState('');

  return (
    <View>
      <TextInput
        style={style.input}
        placeholder="Password Length (8-16)"
        value={inputText}
        onChangeText={setInputText}
      />
    </View>
  );
}

const style = StyleSheet.create({
  input: {
    width: '75%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    color: 'black',
  },
});

export default InputBox;
