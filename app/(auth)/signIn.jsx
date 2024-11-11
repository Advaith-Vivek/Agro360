// import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
// import { useState } from "react";
// import React from "react";
// import FormField from "../../components/FormField";
// import { CustomButton } from "../../components/CustomButton";

// const signIn = () => {
//   // const [form, setForm] = useState({
//   //   email: "",
//   //   password: "",
//   // });
//   const [email, setEmail] = useState("");
//   const [pass, setPass] = useState("");
//   const sendDataToFlask = async () => {
//     try {
//       // Step 3: Send state data (username and password) as JSON to the Flask server
//       const response = await fetch("http://127.0.0.1:5000/sign-up", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json", // Define the content type as JSON
//         },
//         body: JSON.stringify({
//           email, // Send the username and password as JSON
//           pass,
//         }),
//       });

//       // Step 4: Handle the response (success or failure)
//       const data = await response.json(); // Parse the JSON response
//     } catch (error) {
//       // Step 5: Handle errors (network issues, invalid data, etc.)
//       console.error("Error:", error);
//     }
//   };
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const submit = () => {};
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.area}>
//         <Text style={styles.text}>Log In to Agro360</Text>
//         <FormField
//           title="Email"
//           value={email}
//           handleChange={(e) => setEmail(e)}
//         />
//         <FormField
//           title="Password"
//           value={pass}
//           handleChange={(e) => setPass(e)}
//         />
//         <CustomButton title="Sign In" handlePress={sendDataToFlask} />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "rgb(20,20,50)",
//     flex: 1,
//   },
//   area: {
//     marginTop: 200,
//     marginBottom: 400,
//     paddingLeft: 50,
//     justifyContent: "center",
//   },
//   text: {
//     color: "rgb(255,255,255)",
//     fontSize: 20,
//     fontWeight: 200,
//   },
// });

// export default signIn;
