import {useState} from 'react';
import BouncyCheckBox from 'react-native-bouncy-checkbox';

type CheckBoxProps = {
  color: string;
  text: string;
  id: string;
  onChange: (isChecked: boolean) => void;
};

function FormCheckBox(props: CheckBoxProps) {
  const color = props.color;
  const text = props.text;
  const id = props.id;
  const onChange = props.onChange;
  const [isChecked, setChecked] = useState(false);
  console.log(color);

  return (
    <BouncyCheckBox
      size={25}
      fillColor={color}
      text={text}
      iconStyle={{borderColor: color}}
      isChecked={isChecked}
      onPress={(newCheckedValue: boolean) => {
        setChecked(newCheckedValue);
        onChange(newCheckedValue);
      }}
      id={id}
    />
  );
}

export default FormCheckBox;
