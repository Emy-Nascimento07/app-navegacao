import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
export default function Sobre() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela 3: Sobre o app. </Text>
      <Text style={styles.subtitle}>
        Este app é um dos meus primeiros projetos desenvolvidos em React Native.
        Ele marcou o início da minha jornada no desenvolvimento mobile, onde
        comecei a aplicar na prática conceitos como criação de interfaces,
        navegação entre telas e organização de componentes.
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
});
