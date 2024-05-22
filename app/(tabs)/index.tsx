import { SafeAreaView, StyleSheet, Platform } from "react-native";

import PokemonCard from "@/components/pokemoncards/PokemonCard";

export default function HomeScreen() {
  const pikachuData = {
    name: "Pikachu",
    type: "Electric",
    image: require("@/assets/images/Pikachu.png"),
    hp: 55,
    moves: ["Thunder Shock", "Growl", "Tail Whip", "Quick Attack"],
    weaknesses: ["Ground"],
  };

  return (
    <SafeAreaView style={styles.container}>
      <PokemonCard {...pikachuData} />
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
