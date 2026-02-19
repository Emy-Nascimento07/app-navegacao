import { StyleSheet, Text, TouchableOpacity } from "react-native";

// Define as props do componente Button
type ButtonProps = {
  title: string; // Título do botão
  onPress: () => void; // Função a ser chamada quando o botão for pressionado
  color?: string; // Cor de fundo do botão (opcional = ?)
};

export default function Button({
  title,
  onPress,
  color = "#007aff",
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "60%",
    paddingVertical: 12,
    // paddingHorizontal: 36,
    borderRadius: 12,
  },

  buttonText: {
    color: "#f8ecff",
    fontSize: 15,
    fontWeight: 600,
    textAlign: "center",
  },
});
