import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { useState } from "react";
import React from "react";
import FormField from "../../components/FormField";
import { CustomButton } from "../../components/CustomButton";

const signUp = () => {
  // const [form, setForm] = useState({
  //   email: "",
  //   password: "",
  // });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pH, setPH] = useState("");
  const [rain, setRain] = useState("");
  const submit = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          pH,
          rain,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.area}>
        <Text style={styles.text}>Log In to Agro360</Text>
        <FormField title="Name" value={name} handleChange={(e) => setName(e)} />
        <FormField
          title="Email"
          value={email}
          handleChange={(e) => setEmail(e)}
        />
        <FormField
          title="Password"
          value={password}
          handleChange={(e) => setPassword(e)}
        />
        <FormField
          title="pH of the soil in your area"
          value={pH}
          handleChange={(e) => setPH(e)}
        />
        <FormField
          title="Rainfall in your area in cm"
          value={rain}
          handleChange={(e) => setRain(e)}
        />
        <CustomButton title="Sign Up" handlePress={submit} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(20,20,50)",
    flex: 1,
  },
  area: {
    marginTop: 50,
    marginBottom: 400,
    paddingLeft: 50,
    justifyContent: "center",
  },
  text: {
    color: "rgb(255,255,255)",
    fontSize: 20,
    fontWeight: 20,
  },
});

export default signUp;
