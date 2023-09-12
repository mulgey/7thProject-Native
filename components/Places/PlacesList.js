import { View, Text, StyleSheet, FlatList } from "react-native";

// prop olarak burada içerisinde her "yer" için object ler içeren bir array of "yerler" almayı bekliyoruz
export default function PlacesList({ yerler }) {
  // uzun bir liste olabileceğini ön görerek FlatList tercih ettik
  return (
    <FlatList
      data={yerler}
      keyExtractor={(item) => item.id}
      renderItem={() => {}}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
