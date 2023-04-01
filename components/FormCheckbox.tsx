import React from "react";
import { Text, TextProps } from "react-native";

import Checkbox, { CheckboxProps } from "expo-checkbox";
import { Control, Controller } from "react-hook-form";

interface FormCheckboxProps extends CheckboxProps {
  control: Control<any>;
  name: string;
  label: string;
  labelProps?: TextProps;
}

const FormCheckbox = ({
  control,
  name,
  label,
  labelProps,
  ...rest
}: FormCheckboxProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <>
          <Checkbox value={value} onValueChange={onChange} {...rest} />
          <Text {...labelProps}>{label}</Text>
        </>
      )}
    />
  );
};

export default FormCheckbox;
