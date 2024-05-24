import { SafeAreaView, StyleSheet, Platform, ScrollView } from "react-native";

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
  const squirtleData = {
    name: "Squirtle",
    type: "Water",
    image: require("@/assets/images/Squirtle.png"),
    hp: 44,
    moves: ["Tackle", "Tail Whip", "Water Gun", "Bite"],
    weaknesses: ["Electric", "Grass"],
  };
  const bulbasaurData = {
    name: "Bulbasaur",
    type: "Grass",
    image: require("@/assets/images/Bulbasaur.png"),
    hp: 45,
    moves: ["Tackle", "Growl", "Leech Seed", "Vine Whip"],
    weaknesses: ["Fire", "Flying", "Ice", "Psychic"],
  };
  const minccinoData = {
    name: "Minccino",
    type: "Normal",
    image: require("@/assets/images/Minccino.png"),
    hp: 55,
    moves: ["Pound", "Growl", "Helping Hand", "Tickle"],
    weaknesses: ["Fighting"],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCard {...pikachuData} />
        <PokemonCard {...squirtleData} />
        <PokemonCard {...bulbasaurData} />
        <PokemonCard {...minccinoData} />
      </ScrollView>
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
