import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Detalhes() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Detalhes</Text>
      <Image
        style={styles.image}
        source={{
          uri: "https://conceitouno.wordpress.com/wp-content/uploads/2015/10/festival1.jpg",
        }}
      />

      <Text style={styles.description}>
        Aqui você pode adicionar mais informações
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Voltar</Text>
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

  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },

  description: {
    paddingBottom: 20,
    fontSize: 16,
    color: "#2c094a",
    textAlign: "center",
  },
});
