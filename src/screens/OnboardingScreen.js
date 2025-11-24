import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../theme';

export default function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Top Curved Background with Image */}
      <LinearGradient
        colors={['#A8C0FF', '#3F2B96']}
        style={styles.topCurve}
      >
        <Image 
          source={require('../../assets/images/img2.jpg')} // ← YOUR IMAGE HERE
          style={styles.image}
          resizeMode="contain"
        />
      </LinearGradient>

      {/* Title */}
      <Text style={styles.title}>Track Your Goal</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Don't worry if you have trouble determining your goals, 
        We can help you determine your goals and track your goals.
      </Text>

      {/* Next Button */}
      <TouchableOpacity 
        style={styles.nextButton}
       onPress={() => navigation.navigate("Onboarding2")}

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
    paddingTop: 0,
  },

  /** TOP CURVED SECTION **/
  topCurve: {
    width: "100%",
    height: "45%",
    borderBottomLeftRadius: 120,
    borderBottomRightRadius: 120,
    justifyContent: "center",
    alignItems: "center"
  },

  image: {
    width: 270,
    height: 270,
    marginTop: 40,
  },

  /** TEXT AREA **/
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
  },

  /** NEXT BUTTON **/
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
