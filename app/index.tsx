import Button from "@/components/Button";
import ProgressBar from "@/components/ProgressBar";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Home() {
  const router = useRouter();

  const handlePress = () => {
    console.log("Botão clicado!");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
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

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/cardteste")}
      >
        <Text style={styles.buttonText}>Ir para o card teste</Text>
      </TouchableOpacity>

      <Button title="Salvar" onPress={handlePress} />
      <Button
        title="Confirmar presença"
        onPress={handlePress}
        color="#34c759"
      />
      <Button title="Cancelar" onPress={handlePress} color="#ff3b30" />

      <ProgressBar number={20} />
      <ProgressBar number={75} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#efe3fb",
    gap: 4,
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
