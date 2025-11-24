import React from 'react';
import { View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { COLORS } from '../theme';

export default function StatChart() {
  const screenWidth = Dimensions.get('window').width - 48;
  const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [{ data: [2000, 4500, 3000, 7000, 6500, 4300, 5200], strokeWidth: 2 }]
  };

  return (
    <View style={{ marginTop: 12 }}>
      <LineChart
        data={data}
        width={screenWidth}
        height={200}
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(124,123,255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
          propsForDots: { r: '4' }
        }}
        bezier
        style={{ borderRadius: 16 }}
      />
    </View>
  );
}
