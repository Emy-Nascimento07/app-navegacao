import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo ao React Native!</Text>
      <Text style={styles.subtitle}>Esta é a tela inicial do nosso app.</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/detalhes")}
      >
        <Text style={styles.buttonText}>Ir para detalhes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/sobre")}
      >
        <Text style={styles.buttonText}>Ir para sobre o app</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#efe3fb",
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 28,
    fontWeight: 500,
  },

  button: {
    backgroundColor: "#9c6dbb",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginBottom: 20,
  },

  buttonText: {
    color: "#f8ecff",
    fontSize: 15,
    fontWeight: 600,
  },
});
