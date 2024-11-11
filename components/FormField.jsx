import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-web";

const FormField = ({ title, value, handleChange }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={styles.cont}>
      <Text style={styles.text1}>{title}</Text>
      <View style={styles.box}>
        <TextInput
          style={styles.inbox}
          onChangeText={handleChange}
          secureTextEntry={title === "Password" && !showPassword}
          placeholder={title}
        ></TextInput>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    marginTop: 10,
  },
  text1: {
    color: "rgb(255,255,255)",
  },
  box: {
    borderWidth: 20,
    borderColor: "rgb(0,0,0)",
    paddingLeft: 200,
    paddingRight: 200,
    width: 200,
    borderRadius: 10,
    alignItems: "center",
  },
  inbox: {
    flex: 1,
    color: "rgb(255,255,255)",
    backgroundColor: "rgb(0,0,0)",
    width: 400,
  },
});

export default FormField;
