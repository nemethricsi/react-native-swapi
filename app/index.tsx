import { Button, Text, TextInput, View, FlatList } from "react-native";
import { CharacterItem } from "@/components/CharacterItem";
import type { ViewStyle, TextStyle } from "react-native";
import { useSearch } from "@/app/useSearch";

const styles: Record<string, ViewStyle | TextStyle> = {
  container: {
    flex: 1,
    padding: 16,
  },
  searchBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  textInput: {
    flex: 1,
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "white",
    padding: 12,
    borderRadius: 6,
  },
  list: {
    marginVertical: 16,
  },
};

export default function Index() {
  const { isFetching, data, searchTerm, handleTextChange, searchCharacter } =
    useSearch();

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.textInput}
          value={searchTerm}
          onChangeText={handleTextChange}
        />
        <Button title="Search" onPress={searchCharacter} />
      </View>
      {isFetching && (
        <View>
          <Text>Loading...</Text>
        </View>
      )}
      {!isFetching && data !== undefined && Array.isArray(data.results) && (
        <FlatList
          style={styles.list}
          data={data.results}
          renderItem={(item) => <CharacterItem character={item} />}
        />
      )}
    </View>
  );
}
