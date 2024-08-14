import { Text, View } from "react-native";
import type { Character } from "@/api/people";

interface CharacterItemProps {
  character: Character;
}

export const CharacterItem = ({ character }: CharacterItemProps) => {
  const styles = {
    container: {
      backgroundColor: "white",
      paddingVertical: 20,
      paddingHorizontal: 16,
      borderRadius: 6,
      marginBottom: 8,

      shadowColor: "#2e2e2e",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 1,
    },
    name: {
      fontSize: 20,
    },
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {character.name} ({character.height} cm)
      </Text>
    </View>
  );
};
