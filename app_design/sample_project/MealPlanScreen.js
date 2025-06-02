import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button, ActivityIndicator } from 'react-native';
import { getMealPlan } from './openai';

export default function MealPlanScreen({ route }) {
  const { goal } = route.params;
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPlan = async () => {
    setLoading(true);
    const data = await getMealPlan(goal.title);
    setPlan(data);
    setLoading(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>{goal.emoji} {goal.title}</Text>
      <Text style={styles.desc}>{goal.desc}</Text>

      <Button title="Generate AI Meal Plan" onPress={fetchPlan} />
      {loading && <ActivityIndicator style={{ marginTop: 20 }} size="large" />}

      {plan && Object.entries(plan).map(([mealTime, content], index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.time}>{mealTime}</Text>
          <Text style={styles.content}>{content}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24 },
  heading: { fontSize: 24, fontWeight: '700', marginBottom: 12 },
  desc: { fontSize: 16, color: '#666', marginBottom: 20 },
  card: { marginBottom: 16, padding: 16, backgroundColor: '#f2f2f2', borderRadius: 12 },
  time: { fontWeight: '600', fontSize: 16 },
  content: { marginTop: 4, fontSize: 14, color: '#333' },
});
