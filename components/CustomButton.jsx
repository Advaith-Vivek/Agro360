import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const CustomButton = ({ title, handlePress }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={styles.button}
    >
      <Text style={styles.text4}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 50,
    backgroundColor: "rgb(0,255,175)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 200,
  },
  text4: {
    fontWeight: 700,
    fontSize: 13,
    textAlign: "center",
  },
});
