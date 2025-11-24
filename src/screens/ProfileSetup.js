import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { saveProfile } from '../store/slices/authSlice';

export default function ProfileSetup({ navigation }) {
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(saveProfile({ age, height, weight }));
    navigation.replace('Main');
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: '700' }}>Set up your profile</Text>
      <TextInput placeholder="Age" value={age} onChangeText={setAge} style={styles.input} keyboardType="number-pad" />
      <TextInput placeholder="Height (cm)" value={height} onChangeText={setHeight} style={styles.input} keyboardType="number-pad" />
      <TextInput placeholder="Weight (kg)" value={weight} onChangeText={setWeight} style={styles.input} keyboardType="number-pad" />
      <TouchableOpacity style={styles.btn} onPress={handleSave}><Text style={{ color: '#fff' }}>Save & Continue</Text></TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: { borderWidth: 1, borderColor: '#eee', padding: 12, marginTop: 12, borderRadius: 12 },
  btn: { backgroundColor: '#7C7BFF', padding: 14, marginTop: 18, borderRadius: 16, alignItems: 'center' }
});
