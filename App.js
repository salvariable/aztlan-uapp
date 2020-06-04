import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/Home";

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
  sizes: {
    sm: 1,
    md: 2,
    lg: 3,
  },
  layouts: { chico: 8, mediano: 16, grande: 32 },
};

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}
