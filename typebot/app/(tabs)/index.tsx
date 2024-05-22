import {StyleSheet, View, Text} from 'react-native';
import { Bubble } from "@typebot.io/react";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <Bubble
      typebot="chatbot-tcc-w95adi8"
      theme={{ button: { backgroundColor: "#0042DA" } }}
    />
        <Text style={styles.title}>Olá Mundo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },

  title:{
    fontWeight: 100,
    fontSize: 24,
  },
});
