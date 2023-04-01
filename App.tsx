import React from "react";

import Constants from "expo-constants";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import { FieldValues, useForm } from "react-hook-form";
import Input from "./components/Input";
import FormPicker from "./components/FormPicker";
import FormDateTimePicker from "./components/FormDateTimePicker";
import FormCheckbox from "./components/FormCheckbox";

interface FormData extends FieldValues {
  firstName: string;
  lastName: string;
  picker: string;
  time: Date;
  date: Date;
  checked: boolean;
}

const options = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

export default function App() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      picker: "",
      time: new Date(),
      date: new Date(),
      checked: false,
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>First name</Text>
      <Input control={control} required name="firstName" style={styles.input} />

      <Text style={styles.label}>Last name</Text>
      <Input control={control} name="lastName" style={styles.input} required />

      <Text style={styles.label}>Picker</Text>
      <FormPicker
        itemStyle={{ backgroundColor: "white" }}
        control={control}
        name="picker"
        items={options}
      />

      <Text style={styles.label}>Time picker</Text>
      <FormDateTimePicker
        control={control}
        name="time"
        mode="time"
        required
        style={{
          backgroundColor: "white",
        }}
      />

      <Text style={styles.label}>Date picker</Text>
      <FormDateTimePicker
        control={control}
        name="date"
        mode="date"
        required
        style={{
          backgroundColor: "white",
          marginBottom: 20,
        }}
      />

      <FormCheckbox
        control={control}
        name="checked"
        label="Checkbox"
        labelProps={{
          style: styles.label,
        }}
        style={{
          backgroundColor: "white",
        }}
      />

      <View style={styles.button}>
        <Button color="white" title="Reset" onPress={() => reset()} />
      </View>

      <View style={styles.button}>
        <Button color="white" title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: "#0e101c",
  },
  label: {
    color: "white",
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: "white",
    height: 40,
    backgroundColor: "#ec5990",
    borderRadius: 4,
  },
  input: {
    backgroundColor: "white",
    // borderColor: "none",
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});
