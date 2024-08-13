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
    borderWidth: 0.5,
    borderColor: "gray",
  },
  list: {
    marginVertical: 16,
  },
  loadingScreen: {
    flex: 1,
    alignItems: "center",
    paddingTop: 24,
  },
  loadingText: {
    fontSize: 24,
    color: "gray",
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
          placeholder="Search by name..."
        />
        <Button
          title="Search"
          onPress={searchCharacter}
          disabled={!searchTerm}
        />
      </View>
      {isFetching && (
        <View style={styles.loadingScreen}>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      )}
      {!isFetching && data != undefined && data.results.length > 0 && (
        <FlatList
          style={styles.list}
          data={data.results}
          renderItem={({ item }) => <CharacterItem character={item} />}
        />
      )}
    </View>
  );
}
