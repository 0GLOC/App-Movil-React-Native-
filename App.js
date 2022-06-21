import React from "react";
import AppNavigator from "./src/navigation";
import { useFonts } from 'expo-font';
import { ActivityIndicator } from "react-native";

export default function App() {
  let [loaded] = useFonts({
    Kdam: require("./assets/fonts/KdamThmorPro-Regular.ttf"),
    Nuosu: require("./assets/fonts/NuosuSIL-Regular.ttf"),
  });

  if (!loaded) {
    return <ActivityIndicator />;
  }

  return (
    <AppNavigator/>
  );
}