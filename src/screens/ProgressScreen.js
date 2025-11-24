import React from 'react';
import { View, Text } from 'react-native';
import StatChart from '../components/StatChart';

export default function ProgressScreen() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: '700' }}>Progress</Text>
      <StatChart />
    </View>
  );
}
