import {useState} from 'react';
import BouncyCheckBox from 'react-native-bouncy-checkbox';

type CheckBoxProps = {
  color: string;
};

function FormCheckBox(props: CheckBoxProps) {
  const color = props.color;
  const [isChecked, setChecked] = useState(false);

  return (
    <BouncyCheckbox
      size={25}
      fillColor="red"
      unFillColor="#FFFFFF"
      text="Custom Checkbox"
      iconStyle={{borderColor: 'red'}}
      innerIconStyle={{borderWidth: 2}}
      textStyle={{fontFamily: 'JosefinSans-Regular'}}
      onPress={(isChecked: boolean) => {
        console.log(isChecked);
      }}
    />
  );
}

export default FormCheckBox;
