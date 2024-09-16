import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { ThemeProvider } from "styled-components/native";
import COLORS from "../src/styles/theme";
import { Header } from "./components/Header/Header";
import { Provider } from "react-redux";
import store from "./storeConfig/store";
import Routes from "./routes";
import theme from "../src/styles/theme";
import { View } from "react-native";

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded, error] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });
  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={COLORS}>
        <NavigationContainer>
          <Header />
          <StatusBar style="dark" translucent backgroundColor="transparent" />
          <View style={{ flex: 1, backgroundColor: theme.COLORS.BACKGROUND }}>
            <Routes />
          </View>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}
