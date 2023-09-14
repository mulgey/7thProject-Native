import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function IconButton({ name, size, color, onPress }) {
  return (
    <Pressable
      // button style'ı daim, eğer pressed => "pressed" style ı da ekleyelim
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Ionicons name={name} size={size} color={color} onPress={onPress} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    // disturbed the position on iOS
    // margin: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.7,
  },
});
