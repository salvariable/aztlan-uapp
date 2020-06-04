import React from "react";
import { StyleSheet, Text, ImageBackground, View } from "react-native";
import { withTheme } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DrawerActions } from "@react-navigation/native";

const Home = ({ theme, drawerAction, navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri:
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffc02.deviantart.net%2Ffs70%2Fi%2F2012%2F338%2F9%2F8%2Fwater_pattern_by_nemaakos-d5n2v50.jpg&f=1&nofb=1",
        }}
        style={styles.image}
      >
        <View style={styles.island}>
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(DrawerActions.openDrawer());
            }}
          >
            <Text style={styles.title}>Aztlán</Text>
          </TouchableOpacity>
          <Text>
            (en náhuatl: 'aztatl', ‘"garzas", y tlan, "locativo", "lugar de las
            garzas"’) es un sitio mítico, nombrado en varias fuentes de origen
            novohispano y anteriores, del que provienen los aztecas. Aztlán
            suele ser identificado con una isla...
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  island: {
    margin: 64,
    padding: 64,
    backgroundColor: "white",
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 36,
  },
});

export default withTheme(Home);
