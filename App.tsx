import { StyleSheet, Text, View } from "react-native";
import RegistrationScreen from "../components/RegistrationScreen";
import React from "react";

export default function App() {
  return <RegistrationScreen></RegistrationScreen>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
