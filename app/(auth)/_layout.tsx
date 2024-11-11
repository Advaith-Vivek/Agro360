import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const Authlayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="signIn"
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="signUp"
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack>
  );
};

export default Authlayout;
