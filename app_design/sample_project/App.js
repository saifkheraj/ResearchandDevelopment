// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NutritionGoalsScreen from './NutritionGoalsScreen'; // ✅ import your new screen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NutritionGoals">
        <Stack.Screen
          name="NutritionGoals"
          component={NutritionGoalsScreen}
          options={{ title: 'Nutrition Goals' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
