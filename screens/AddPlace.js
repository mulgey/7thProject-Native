import { View, Text, StyleSheet } from "react-native";

// components
import PlaceForm from "../components/Places/PlaceForm";

export default function AddPlace() {
  return <PlaceForm />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
