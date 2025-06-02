// NutritionGoalsScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const goals = [
  {
    title: 'Weight Loss',
    emoji: '⚖️',
    desc: 'Healthy calorie deficit with balanced nutrition',
  },
  {
    title: 'Muscle Building',
    emoji: '💪',
    desc: 'High protein diet for muscle development',
  },
  {
    title: 'Heart Health',
    emoji: '❤️',
    desc: 'Low sodium, omega-3 rich nutrition plan',
  },
  {
    title: 'Energy & Performance',
    emoji: '⚡',
    desc: 'Balanced macros for sustained energy',
  },
  {
    title: 'Digestive Health',
    emoji: '🌿',
    desc: 'Gut-friendly, high fiber nutrition',
  },
];

export default function NutritionGoalsScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>What's your nutrition goal?</Text>
        {goals.map((goal, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => navigation.navigate('MealPlan', { goal })}
          >
            <Text style={styles.emoji}>{goal.emoji}</Text>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{goal.title}</Text>
              <Text style={styles.desc}>{goal.desc}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  container: {
    padding: 24,
    backgroundColor: '#f9f9f9',
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 28,
    color: '#000',
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#eee',
  },
  emoji: {
    fontSize: 30,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111',
  },
  desc: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});
