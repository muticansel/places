import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="All Places" component={AllPlaces} />
          <Stack.Screen name="Add Place" component={AddPlace} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
