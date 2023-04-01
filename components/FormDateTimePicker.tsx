import React from "react";
import { Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Control, Controller } from "react-hook-form";
import { ViewProps } from "react-native";

interface FormDateTimePickerProps extends ViewProps {
  control: Control<any>;
  name: string;
  required?: boolean;
  mode: "date" | "time" | "datetime";

  // Type '{ control: Control<Record<string, any>>; name: string; mode: "date" | "time" | "datetime"; }' is not assignable to type 'IntrinsicAttributes & FormDateTimePickerProps<Record<string, any>> & { children?: ReactNode; }'.
  // Property 'control' does not exist on type 'IntrinsicAttributes & FormDateTimePickerProps<Record<string, any>> & { children?: ReactNode; }'.
}

const FormDateTimePicker = ({
  control,
  name,
  mode,
  required,
  ...rest
}: FormDateTimePickerProps) => {
  const isAndroid = Platform.OS === "android";

  return (
    <Controller
      control={control}
      name={name.toString()}
      rules={{ required }}
      render={({ field: { onChange, value } }) => (
        <DateTimePicker
          mode={mode}
          value={isAndroid ? new Date(value) : value}
          display="spinner"
          onChange={(_, selectedDate) => {
            const currentDate = selectedDate || value;
            onChange(currentDate);
          }}
          {...rest}
        />
      )}
    />
  );
};

export default FormDateTimePicker;
