import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../components/Card';

export default function GoalScreen() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: '700' }}>Set Goals</Text>
      <Card style={{ marginTop: 16 }}>
        <Text>Daily Steps: 8000</Text>
        <Text>Daily Calories: 400 kcal</Text>
      </Card>
    </View>
  );
}
