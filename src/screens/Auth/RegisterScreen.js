import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { register } from '../../store/slices/authSlice';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleRegister = () => {
    dispatch(register({ uid: 'user123', email, name }));
    navigation.replace('ProfileSetup');
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 22, fontWeight: '700' }}>Create Account</Text>
      <TextInput placeholder="Full name" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TouchableOpacity style={styles.btn} onPress={handleRegister}>
        <Text style={{ color: '#fff' }}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  input: { borderWidth: 1, borderColor: '#eee', padding: 12, marginTop: 12, borderRadius: 12 },
  btn: { backgroundColor: '#7C7BFF', padding: 14, marginTop: 18, borderRadius: 16, alignItems: 'center' }
});
