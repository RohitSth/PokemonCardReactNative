import { View, Text, StyleSheet, Platform, Image } from "react-native";

// Pokemon Type Details
const getTypeDetails = (type: string) => {
  switch (type.toLowerCase()) {
    case "electric":
      return { borderColor: "yellow", emoji: "⚡️" };
    case "fire":
      return { borderColor: "red", emoji: "🔥" };
    case "water":
      return { borderColor: "blue", emoji: "💧" };
    case "grass":
      return { borderColor: "green", emoji: "🌿" };
    case "bug":
      return { borderColor: "green", emoji: "🐛" };
    case "poison":
      return { borderColor: "purple", emoji: "☠️" };
    case "flying":
      return { borderColor: "skyblue", emoji: "🕊" };
    default:
      return { borderColor: "black", emoji: "❓" };
  }
};

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
  const { borderColor, emoji } = getTypeDetails(type);

  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤{hp}</Text>
      </View>

      <Image
        style={styles.image}
        source={image}
        accessibilityLabel={`${name} pokemon`}
        resizeMode="contain"
      />

      <View style={styles.typeContainer}>
        <View style={[styles.badge, { borderColor }]}>
          <Text style={styles.typeEmoji}>{emoji}</Text>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>
      <View style={styles.movesContainer}>
        <Text style={styles.movesText}>Moves: {moves.join(", ")}</Text>
      </View>
      <View style={styles.weaknessContainer}>
        <Text style={styles.weaknessText}>
          Weakness: {weaknesses.join(", ")}
        </Text>
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
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "blue",
  },
  hp: {
    fontSize: 18,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
  },
  typeContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 4,
  },
  typeEmoji: {
    fontSize: 30,
    marginRight: 12,
  },
  typeText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  movesContainer: {
    marginBottom: 16,
  },
  movesText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  weaknessContainer: {
    marginBottom: 8,
  },
  weaknessText: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
