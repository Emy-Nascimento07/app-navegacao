import React from "react";

import { StyleSheet, Text, View } from "react-native";

type BarProps = {
  number: number;
};

export default function ProgressBar({ number }: BarProps) {
  const progress = Math.min(Math.max(number, 0), 100); // Garante que o valor esteja entre 0 e 100
  const corDaBarra = number < 40 ? "#ff4d4d" : "#2ecc71";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confira aqui o progresso desse projeto!</Text>
      <Text style={styles.label}>{number}%</Text>
      <View style={styles.progressBarContainer}>
        <View
          style={[
            styles.progressBar,
            { width: `${number}%`, backgroundColor: corDaBarra },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#a867d9",
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "bold",
    color: "#333",
  },
  progressBarContainer: {
    height: 20,
    width: "100%",
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#2ecc71",
  },
});
