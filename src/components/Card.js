import React from 'react';
import { View } from 'react-native';
import { COLORS } from '../theme';

export default function Card({ children, style }) {
  return (
    <View style={[
      { backgroundColor: COLORS.card, padding: 14, borderRadius: 18, marginVertical: 6, shadowColor: '#000', shadowOpacity: 0.06, shadowOffset: { width: 0, height: 4 }, elevation: 2 }, style
    ]}>
      {children}
    </View>
  );
}
