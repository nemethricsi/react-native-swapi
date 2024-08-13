import {
  Button,
  Text,
  TextInput,
  View,
  FlatList,
  StyleSheet,
} from "react-native";
import { CharacterItem } from "@/components/CharacterItem";
import { useSearch } from "@/app/useSearch";

const styles = StyleSheet.create({
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
  resultIndicator: {
    marginBottom: 8,
  },
  screen: {
    flex: 1,
    alignItems: "center",
    paddingTop: 24,
  },
  screenText: {
    fontSize: 24,
    color: "gray",
  },
});

export default function Index() {
  const { isFetching, data, searchTerm, handleTextChange, searchCharacter } =
    useSearch();

  const noResultsMessage = "No results found. The Force is not with you...";

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
        <View style={styles.screen}>
          <Text style={styles.screenText}>Loading...</Text>
        </View>
      )}
      {!isFetching && data != undefined && data.results.length === 0 && (
        <View style={styles.screen}>
          <Text style={styles.screenText}>{noResultsMessage}</Text>
        </View>
      )}
      {!isFetching && data !== undefined && data.results.length > 0 && (
        <View style={styles.list}>
          <Text style={styles.resultIndicator}>{data.count} result(s).</Text>
          <FlatList
            data={data.results}
            renderItem={({ item }) => <CharacterItem character={item} />}
          />
        </View>
      )}
    </View>
  );
}
