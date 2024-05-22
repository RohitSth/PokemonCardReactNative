import { SafeAreaView, StyleSheet, Platform } from "react-native";

import PokemonCard from "@/components/pokemoncards/PokemonCard";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <PokemonCard />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
