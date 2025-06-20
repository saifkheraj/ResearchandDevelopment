// HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const goals = [
  {
    title: 'Weight Loss',
    description: 'Healthy calorie deficit with balanced nutrition',
    emoji: '⚖️'
  },
  {
    title: 'Muscle Building',
    description: 'High protein diet for muscle development',
    emoji: '💪'
  },
  {
    title: 'Heart Health',
    description: 'Low sodium, omega-3 rich nutrition plan',
    emoji: '❤️'
  },
  {
    title: 'Energy & Performance',
    description: 'Balanced macros for sustained energy',
    emoji: '⚡'
  },
  {
    title: 'Digestive Health',
    description: 'Gut-friendly, high fiber nutrition',
    emoji: '🌿'
  }
];

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>What's your nutrition goal?</Text>
      {goals.map((goal, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => navigation.navigate('UserProfile', { goal: goal.title })}
        >
          <Text style={styles.emoji}>{goal.emoji}</Text>
          <View>
            <Text style={styles.cardTitle}>{goal.title}</Text>
            <Text style={styles.cardDesc}>{goal.description}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20
  },
  card: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#f2f2f2',
    marginBottom: 15,
    alignItems: 'center'
  },
  emoji: {
    fontSize: 28,
    marginRight: 15
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 18
  },
  cardDesc: {
    fontSize: 14,
    color: '#555'
  }
});

export default HomeScreen;