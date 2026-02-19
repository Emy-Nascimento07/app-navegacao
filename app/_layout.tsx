import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    // Tirar a barra de navegação padrão
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="detalhes" options={{ title: "Detalhes" }} />
      <Stack.Screen name="sobre" options={{ title: "Sobre" }} />
      <Stack.Screen name="cardteste" options={{ title: "CardTeste" }} />
    </Stack>
  );
}
