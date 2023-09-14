import { View, Text, StyleSheet, Image, Pressable } from "react-native";

export default function PlaceItem({ yer, onSelect }) {
  return (
    <Pressable onPress={onSelect}>
      <Image source={{ uri: yer.imageUri }} />
      <View>
        <Text>{yer.title}</Text>
        <Text>{yer.address}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
