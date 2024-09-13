import { StatusBar } from 'expo-status-bar';
import React, { useEffect  } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto"
import { ThemeProvider } from 'styled-components/native';
import COLORS from "../src/styles/theme";

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded, error] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  })
  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }


  return (
    <ThemeProvider theme={COLORS}>
      <View style={styles.container}>
        <StatusBar style='dark' translucent backgroundColor='transparent'/>
        <Text>SplashScreen Demo! 👋</Text>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Roboto_300Light',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
