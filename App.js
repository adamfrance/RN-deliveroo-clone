import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import "react-native-url-polyfill/auto";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import { store } from "./store";
import BasketScreen from "./screens/BasketScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import { LogBox } from 'react-native';
import DeliveryScreen from "./screens/DeliveryScreen";

LogBox.ignoreAllLogs();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen name="Basket" component={BasketScreen} options={{
            presentation: 'modal', headerShown:false
          }} />
          <Stack.Screen name="PreparingOrderScreen" component={PreparingOrderScreen} 
          options={{ presentation: 'fullScreenModal', headerShown: false}}
          />
          <Stack.Screen name="Delivery" component={DeliveryScreen} 
          options={{ presentation: 'fullScreenModal', headerShown: false}}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
