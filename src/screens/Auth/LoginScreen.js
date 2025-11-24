import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../../store/slices/authSlice';
import { COLORS } from '../../theme';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    // simple mock login
    dispatch(login({ uid: 'user123', email }));
    navigation.replace('Main');
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 22, fontWeight: '700' }}>Welcome Back</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Password" value={pass} onChangeText={setPass} style={styles.input} secureTextEntry />
      <TouchableOpacity style={styles.btn} onPress={handleLogin}>
        <Text style={{ color: '#fff' }}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={{ marginTop: 12, color: COLORS.muted }}>Create an account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  input: {
    borderWidth: 1, borderColor: '#eee', padding: 12, marginTop: 12, borderRadius: 12, backgroundColor: '#fff'
  },
  btn: {
    backgroundColor: '#7C7BFF', padding: 14, marginTop: 18, borderRadius: 16, alignItems: 'center'
  }
});
