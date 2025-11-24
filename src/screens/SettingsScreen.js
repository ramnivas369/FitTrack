import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';

export default function SettingsScreen({ navigation }) {
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: '700' }}>Settings</Text>
      <TouchableOpacity style={{ marginTop: 20 }} onPress={() => { dispatch(logout()); navigation.replace('Login'); }}>
        <Text style={{ color: '#ff3333' }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
