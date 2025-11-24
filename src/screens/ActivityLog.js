import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Card from '../components/Card';

export default function ActivityLog() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: '700' }}>Workout Schedule</Text>
      <Card style={{ marginTop: 12 }}>
        <Text>Lowerbody Workout - Today 03:00 PM</Text>
      </Card>
      <TouchableOpacity style={{ marginTop: 18, backgroundColor: '#7C7BFF', padding: 12, borderRadius: 12 }}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>Mark as Done</Text>
      </TouchableOpacity>
    </View>
  );
}
