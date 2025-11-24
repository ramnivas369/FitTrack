import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, FONTS } from '../theme';

export default function Header({
  title = '',
  onBack = null,
  onMenu = null,
  style
}) {
  return (
    <View style={[styles.container, style]}>
      {/* Left icon - back button */}
      {onBack ? (
        <TouchableOpacity onPress={onBack} style={styles.iconBtn}>
          <Ionicons name="chevron-back" size={26} color={COLORS.text} />
        </TouchableOpacity>
      ) : (
        <View style={styles.iconBtn} />
      )}

      {/* Center Title */}
      <Text style={[FONTS.title, styles.title]}>{title}</Text>

      {/* Right icon - menu */}
      {onMenu ? (
        <TouchableOpacity onPress={onMenu} style={styles.iconBtn}>
          <Ionicons name="ellipsis-vertical" size={22} color={COLORS.text} />
        </TouchableOpacity>
      ) : (
        <View style={styles.iconBtn} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.bg
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontWeight: '700',
    color: COLORS.text
  },
  iconBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
