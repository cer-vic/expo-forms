import React from "react";
import { Switch, View, Text, TextProps, SwitchProps } from "react-native";

import { Control, Controller } from "react-hook-form";

interface FormSwitchProps extends SwitchProps {
  control: Control<any>;
  name: string;
  label: string;
  labelProps?: TextProps;
}

const FormSwitch = ({
  control,
  name,
  label,
  labelProps,
  ...rest
}: FormSwitchProps) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={value ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={onChange}
            value={value}
            {...rest}
          />
        )}
      />
      <Text {...labelProps}>{label}</Text>
    </View>
  );
};

export default FormSwitch;
