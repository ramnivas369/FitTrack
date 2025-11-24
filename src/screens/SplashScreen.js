import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../theme';

export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
      {/* Logo */}
      <Image 
        source={require('../../assets/images/placeholder.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* App Name */}
      <Text style={styles.title}>
  <Text style={{ color: '#000' }}>Fit</Text>
  <Text style={{ color: COLORS.primary }}>Track</Text>
</Text>


      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Your Personal Fitness & Wellness Companion
      </Text>

      {/* Get Started Button */}
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Onboarding')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 25,
  },
  title: {
    fontSize: 35,
    fontWeight: '700',
    color: COLORS.primary || '#3b82f6',
  },
  subtitle: {
    textAlign: 'center',
    color: COLORS.muted || '#777',
    fontSize: 16,
    marginTop: 8,
    marginBottom: 40,
  },
  button: {
    backgroundColor: COLORS.primary || '#3b82f6',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 4,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  }
});
