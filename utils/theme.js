import React, { StyleSheet } from "react-native";
import { white, lightgreen, red, blue, green, yellow } from "./colors";

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: white
  },
  button: {
    marginBottom: 10
  },
  bigTitle: { color: blue, fontSize: 25, textAlign: "center" },
  title: { color: blue, fontSize: 22, textAlign: "center" },
  subtitle: {
    color: green,
    fontSize: 16,
    textAlign: "center"
  },
  deleteText: {
    color: red,
    fontSize: 14,
    textAlign: "center"
  },
  inputContainer: {
    padding: 12,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "stretch"
  }
}));
