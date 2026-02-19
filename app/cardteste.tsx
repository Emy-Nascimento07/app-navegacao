import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Card } from "../components/card";
export default function CardTeste() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Card
          title="Card 1"
          imageUri="https://i.pinimg.com/736x/a9/b4/ab/a9b4ab5d0a026347ba9ab5ba543a9e5d.jpg"
        />
        <Card
          title="Card 2"
          imageUri="https://i.pinimg.com/1200x/b1/09/5e/b1095ef8e31648f495e64381a31077c2.jpg"
        />
        <Card
          title="Card 3"
          imageUri="https://i.pinimg.com/1200x/45/ec/59/45ec59c754dd7b35bad053c2aee62141.jpg"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 16,
    backgroundColor: "#efe3fb",
  },
  cardContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
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
