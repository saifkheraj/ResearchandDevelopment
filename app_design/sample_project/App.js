import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import NutritionGoalsScreen from './NutritionGoalsScreen';
import MealPlanScreen from './MealPlanScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="NutritionGoals"
        screenOptions={{
          headerStyle: { backgroundColor: '#fff' },
          headerTitleStyle: { fontWeight: '600' },
          headerTintColor: '#000',
        }}
      >
        <Stack.Screen
          name="NutritionGoals"
          component={NutritionGoalsScreen}
          options={{ title: 'Nutrition Goals' }}
        />
        <Stack.Screen
          name="MealPlan"
          component={MealPlanScreen}
          options={{ title: 'Meal Plan' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
