import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens & components & constants
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import IconButton from "./components/UI/IconButton";
import { Colors } from "./constants/colors";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto"></StatusBar>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: Colors.gray700,
            contentStyle: { backgroundColor: Colors.gray700 },
          }}
        >
          <Stack.Screen
            name="allplaces"
            component={AllPlaces}
            // navigation kullanabilmek için options yapısını arrow-funct a çevirdik
            options={({ navigation }) => ({
              title: "Your Favorite Places",
              headerRight: ({ tintColor }) => (
                <IconButton
                  name="add"
                  size={24}
                  color={tintColor}
                  onPress={() => navigation.navigate("addplace")}
                />
              ),
            })}
          />
          <Stack.Screen
            name="addplace"
            component={AddPlace}
            options={{ title: "Add a New Place" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
