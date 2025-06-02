// NutritionGoalsScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

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

export default function NutritionGoalsScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>What's your nutrition goal?</Text>
      {goals.map((goal, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => navigation.navigate('NextScreen', { goal: goal.title })}
        >
          <Text style={styles.emoji}>{goal.emoji}</Text>
          <View>
            <Text style={styles.title}>{goal.title}</Text>
            <Text style={styles.desc}>{goal.desc}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  emoji: {
    fontSize: 26,
    marginRight: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  desc: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
});
