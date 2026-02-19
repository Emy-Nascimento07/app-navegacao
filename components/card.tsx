import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

// Propriedades do card
interface CardProps {
  title: string;
  imageUri: string;
}

export const Card: React.FC<CardProps> = ({ title, imageUri }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.image} source={{ uri: imageUri }} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#dac3e6",
    width: 150,
    height: 220,
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    marginRight: 16,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0e0e0e",
    marginBottom: 8,
    alignSelf: "center",
  },

  image: {
    width: "100%",
    height: "80%",
    borderRadius: 8,
  },
});
