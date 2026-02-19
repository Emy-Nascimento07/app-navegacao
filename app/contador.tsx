import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Contador() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const desincrementar = () => {
    setContador(contador - 1);
  };

  const zerar = () => {
    setContador(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.contador}>{contador}</Text>
      <TouchableOpacity style={styles.botao} onPress={incrementar}>
        <Text style={styles.botaotexto}>Aumentar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={desincrementar}>
        <Text style={styles.botaotexto}>Diminuir</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={zerar}>
        <Text style={styles.botaotexto}>Zerar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contador: {
    fontSize: 170,
    fontWeight: 600,
  },
  botao: {
    width: "70%",
    paddingVertical: 16,
    borderRadius: 12,
    backgroundColor: "#be97e2",
    marginBottom: 6,
  },
  botaotexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 600,
    textAlign: "center",
  },
});
