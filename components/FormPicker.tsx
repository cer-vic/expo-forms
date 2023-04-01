import React from "react";

import { Picker, PickerProps } from "@react-native-picker/picker";
import { Control, Controller } from "react-hook-form";

interface FormPickerProps extends PickerProps {
  control: Control<any>;
  name: string;
  items: any[];
}

const FormPicker = ({ control, name, items, ...rest }: FormPickerProps) => {
  return (
    <Controller
      control={control}
      name={name.toString()}
      render={({ field: { onChange, onBlur, value } }) => (
        <Picker
          onBlur={onBlur}
          onValueChange={onChange}
          selectedValue={value}
          {...rest}
        >
          {items.map((item) => (
            <Picker.Item
              key={item.value}
              label={item.label}
              value={item.value}
            />
          ))}
        </Picker>
      )}
    />
  );
};

export default FormPicker;
