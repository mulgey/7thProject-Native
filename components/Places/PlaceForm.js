import { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";

// screens & constants
import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";

export default function PlaceForm() {
  const [baslik, baslikAksiyonu] = useState();

  function baslikDegisimFonksiyonu(girdiTexti) {
    baslikAksiyonu(girdiTexti);
  }

  return (
    // çok uzun bir listemiz olsaydı FlatList kullanırdık
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={baslikDegisimFonksiyonu}
          value={baslik}
        />
      </View>
      <ImagePicker />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 8,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
    borderRadius: 6,
  },
});
