import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function GoalDetailsScreen({ route }) {
  const { goal } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{goal.emoji} {goal.title}</Text>
      <Text style={styles.desc}>{goal.desc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, flex: 1, justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: '700', marginBottom: 12 },
  desc: { fontSize: 18, color: '#444' },
});
