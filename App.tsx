import React from "react";

import Constants from "expo-constants";
import { StyleSheet, Text, View, Button } from "react-native";
import { useForm } from "react-hook-form";
import Input from "./components/Input";
import FormPicker from "./components/FormPicker";

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
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      picker: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>First name</Text>
      <Input control={control} required name="firstName" style={styles.input} />

      <Text style={styles.label}>Last name</Text>
      <Input control={control} name="lastName" style={styles.input} required />

      {/* TODO: styles */}
      <Text style={styles.label}>Picker</Text>
      <FormPicker
        itemStyle={{ backgroundColor: "white" }}
        control={control}
        name="picker"
        items={options}
      />

      <View style={styles.button}>
        <Button color="white" title="Reset" onPress={() => reset()} />
      </View>

      <View style={styles.button}>
        <Button color="white" title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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
