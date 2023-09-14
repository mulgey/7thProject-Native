import { View, Text, StyleSheet, FlatList } from "react-native";

// components & constants
import PlaceItem from "./PlaceItem";
import { Colors } from "../../constants/colors";

// prop olarak burada içerisinde her "yer" için object ler içeren bir array of "yerler" almayı bekliyoruz
export default function PlacesList({ yerler }) {
  // eğer yerler tanımlı değilse veya içi boş ise
  if (!yerler || yerler.length === 0) {
    return (
      <View style={styles.bosVeriContainer}>
        <Text style={styles.bosVeriText}>
          Henüz eklenen bir yer yok. Eklemeye başlayabilirsiniz
        </Text>
      </View>
    );
  }

  // uzun bir liste olabileceğini ön görerek FlatList tercih ettik
  return (
    <FlatList
      data={yerler}
      keyExtractor={(item) => item.id}
      // her yer öğesi object olduğu için "tekilOgeObjesi" için parantez içi {} çalıştık
      // object içerisindeki her parametreyi tek tek prop olarak paslamak yerine object olarak komple şutladık
      renderItem={({ tekilOgeObjesi }) => <PlaceItem yer={tekilOgeObjesi} />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bosVeriContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bosVeriText: {
    fontSize: 16,
    color: Colors.primary200,
  },
});
