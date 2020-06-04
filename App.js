import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./src/Home";
import { Platform } from "react-native";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

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
        <Drawer.Navigator
          initialRouteName="Home"
          drawerType={"slide"}
          drawerStyle={{
            textColor: "#700703",
            backgroundColor: "lightblue",
          }}
          drawerContentOptions={{
            activeBackgroundColor: "orange",
            activeTintColor: "white",
            itemStyle: { marginVertical: 16 },
            borderRightWidth: 10,
            borderColor: "white",
          }}
        >
          <Drawer.Screen
            name="Bienvenida"
            component={Home}
            // options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="Nuestra historia"
            component={Home}
            // options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="Nuestra filosofía"
            component={Home}
            // options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="Nuestros productos"
            component={Home}
            // options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="Indicadores"
            component={Home}
            // options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="Propuestas"
            component={Home}
            // options={{ headerShown: false }}
          />
          <Drawer.Screen
            name="Colaboraciones"
            component={Home}
            // options={{ headerShown: false }}
          />
        </Drawer.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}
