import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Card from '../components/Card';
import StatChart from '../components/StatChart';
import { COLORS } from '../theme';

export default function Dashboard() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: COLORS.bg }}>
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 22, fontWeight: '700' }}>Activity Tracker</Text>
        <View style={{ marginTop: 12 }}>
          <Card>
            <Text style={{ fontWeight: '600' }}>Today Target</Text>
            <View style={{ flexDirection: 'row', marginTop: 12, justifyContent: 'space-between' }}>
              <View>
                <Text style={{ color: COLORS.muted }}>8L</Text>
                <Text>Water Intake</Text>
              </View>
              <View>
                <Text style={{ color: COLORS.muted }}>2400</Text>
                <Text>Foot Steps</Text>
              </View>
            </View>
          </Card>
        </View>

        <View style={{ marginTop: 16 }}>
          <Text style={{ fontSize: 16, fontWeight: '600' }}>Activity Progress</Text>
          <StatChart />
        </View>

        <View style={{ marginTop: 16 }}>
          <Text style={{ fontSize: 16, fontWeight: '600' }}>Latest Activity</Text>
          <Card>
            <Text>Drinking 300ml Water • 3 min ago</Text>
          </Card>
        </View>
      </View>
    </ScrollView>
  );
}
