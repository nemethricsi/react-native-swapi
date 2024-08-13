import { Text, View } from "react-native";
import type { Character } from "@/api/people";

export const CharacterItem = ({ character }: { character: Character }) => {
  const styles = {
    container: {
      backgroundColor: "white",
    },
  };

  return (
    <View style={styles.container}>
      <Text>
        {character.name}({character.gender})
      </Text>
    </View>
  );
};
