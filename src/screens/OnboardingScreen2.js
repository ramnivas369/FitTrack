import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../theme';

export default function OnboardingScreen2({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Top Background with Curved Shape */}
      <LinearGradient
        colors={['#A8C0FF', '#3F2B96']}
        style={styles.topCurve}
      >
        <Image 
          source={require('../../assets/images/img3.png')}  // your image
          style={styles.image}
          resizeMode="contain"
        />
      </LinearGradient>

      {/* Title */}
      <Text style={styles.title}>Get Burn</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Let’s keep burning, to achieve your goals, it hurts only temporarily,
        if you give up now you will be in pain forever
      </Text>

      {/* Next Button */}
      <TouchableOpacity 
        style={styles.nextButton}
        onPress={() => navigation.navigate("Login")}
      >
        <LinearGradient 
          colors={['#A8C0FF', '#3F2B96']}
          style={styles.nextButtonBG}
        >
          <Ionicons name="arrow-forward" size={28} color="#fff" />
        </LinearGradient>
      </TouchableOpacity>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
  },

  topCurve: {
    width: "100%",
    height: "45%",
    borderBottomLeftRadius: 120,
    borderBottomRightRadius: 120,
    justifyContent: "center",
    alignItems: "center"
  },

  image: {
    width: 280,
    height: 280,
    marginTop: 30,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    marginTop: 30,
    color: COLORS.text || '#222',
  },

  subtitle: {
    textAlign: 'center',
    color: "#8c8c8c",
    marginHorizontal: 25,
    fontSize: 16,
    marginTop: 10,
    lineHeight: 22,
  },

  nextButton: {
    position: "absolute",
    bottom: 40,
    right: 40
  },

  nextButtonBG: {
    width: 65,
    height: 65,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  }
});
