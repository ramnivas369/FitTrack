import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../theme';

export default function GradientButton({ title, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <LinearGradient colors={[COLORS.primaryStart, COLORS.primaryEnd]} style={{ padding: 12, borderRadius: 30, alignItems: 'center' }}>
        <Text style={{ color: '#fff', fontWeight: '700' }}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
