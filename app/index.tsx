import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomButton } from "../components/CustomButton";
import { Redirect, router } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.area}>
        <Text style={styles.text1}>
          Modernize agriculture with <Text style={styles.text2}>Agro360</Text>
        </Text>
        <Text style={styles.text3}>
          Where technology and data science meets the age-old practice of
          farming
        </Text>
        <CustomButton
          title="Get Started"
          handlePress={() => router.push("/signUp")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(20,20,50)",
    flex: 1,
  },
  area: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    color: "rgb(255,255,255)",
    fontWeight: 700,
    fontSize: 25,
    textAlign: "center",
  },
  text2: {
    color: "rgb(0,255,175)",
    fontWeight: 700,
    fontSize: 25,
    textAlign: "center",
  },
  text3: {
    color: "rgb(255,255,255)",
    fontWeight: 700,
    fontSize: 13,
    textAlign: "center",
    padding: 20,
  },
  button: {
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
