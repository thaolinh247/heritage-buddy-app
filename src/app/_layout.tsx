import "../global.css";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "OpenDyslexic-Regular": require("../../assets/fonts/OpenDyslexic-Regular.otf"),
    "OpenDyslexic-Bold": require("../../assets/fonts/OpenDyslexic-Bold.otf"),
    "OpenDyslexic-Italic": require("../../assets/fonts/OpenDyslexic-Italic.otf"),
    "OpenDyslexic-BoldItalic": require("../../assets/fonts/OpenDyslexic-BoldItalic.otf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <Stack />;
}
