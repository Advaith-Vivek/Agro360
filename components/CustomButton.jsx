import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function CustomButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text4}>Get Started</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgb(0,255,175)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 200,
  },
  text4: {
    fontWeight: "700",
    fontSize: 13,
    textAlign: "center",
  },
});
