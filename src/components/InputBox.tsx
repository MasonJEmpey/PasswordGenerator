import {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

interface InputBoxProps {
  onLengthChange: (length: string) => void;
}

function InputBox({onLengthChange}: InputBoxProps) {
  const [length, setLength] = useState('');

  const handleInputChange = (text: string) => {
    onLengthChange(text);
    setLength(text);
  };

  return (
    <View>
      <TextInput
        style={style.input}
        placeholder="Password Length (8-16)"
        value={length}
        onChangeText={handleInputChange}
        keyboardType="numeric"
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
