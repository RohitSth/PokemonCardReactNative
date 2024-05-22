import { View, Text, StyleSheet, Platform, Image } from "react-native";
export default function PokemonCard({
  name,
  type,
  image,
  hp,
  moves,
  weaknesses,
}: {
  name: string;
  type: string;
  image: any;
  hp: number;
  moves: string[];
  weaknesses: string[];
}) {
  return (
    <View style={styles.card}>
      <View>
        <Text>{name}</Text>
        <Text>{hp}</Text>
      </View>

      <Image source={image} accessibilityLabel={`${name} pokemon`} />

      <View>
        <Text>{type}</Text>
      </View>
      <View>
        <Text>Moves: {moves.join(", ")}</Text>
      </View>
      <View>
        <Text>Weakness: {weaknesses.join(", ")}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowColor: "#333",
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
      },
      android: {
        elevation: 4,
      },
    }),
  },
});
