import React from "react";

import { Control, Controller, FieldValues } from "react-hook-form";
import { TextInput, TextInputProps } from "react-native";

interface InputProps<T extends FieldValues> extends TextInputProps {
  control: Control<T>;
  name: keyof T;
  required?: boolean;
  //   label: string;
}

const Input = (props: InputProps<any>) => {
  const { control, name, required, ...rest } = props;
  return (
    <Controller
      control={control}
      name={name.toString()}
      rules={{ required }}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          onBlur={onBlur}
          onChangeText={(value) => onChange(value)}
          value={value}
          {...rest}
        />
      )}
    />
  );
};

export default Input;
