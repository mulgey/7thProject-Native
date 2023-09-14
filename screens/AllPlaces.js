import { View, Text, StyleSheet } from "react-native";

// components
import PlacesList from "../components/Places/PlacesList";

export default function AllPlaces() {
  return <PlacesList />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
