import { View, StyleSheet, Alert } from "react-native";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";

// UIs & constants
import OutlinedButton from "../UI/OutlinedButton";
import { Colors } from "../../constants/colors";

export default function LocationPicker() {
  const [permissionInfo, requestPermission] = useForegroundPermissions();

  async function verifyPermissions() {
    // eğer izin alınmamış ise
    if (permissionInfo.status === PermissionStatus.UNDETERMINED) {
      // izin iste ve cevabı depola
      const permissionResponse = await requestPermission();
      // alınan cevabı (true/false) return le
      return permissionResponse.granted;
    }

    // eğer izin verilmemiş ise
    if (permissionInfo.status === PermissionStatus.DENIED) {
      // bu konuda bilgilendir
      Alert.alert(
        "Müsade yok ki",
        "Yer bilgierine izin verirseniz işimi halledebilirim"
      );
      // olumsuz dön
      return false;
    }

    // yukarıdaki 2 durum (belli değil / reddedilmiş) izin verilmiş demektir
    return true;
  }

  async function lokasyonAlFonksiyonu() {
    const izinAlinmis = await verifyPermissions();

    // izin yoksa süreci burada sessizce bitir
    if (!izinAlinmis) {
      return;
    }

    // getCurrentPositionAsync() parantez içinde object içinde property seçenekleri var
    const location = await getCurrentPositionAsync();
    console.log(location);
  }

  function haritadaSecFonksiyonu() {}

  return (
    <View>
      <View style={styles.mapPreview}></View>
      <View style={styles.actions}>
        <OutlinedButton
          children="Yer belirle"
          name="location"
          onPress={lokasyonAlFonksiyonu}
        />
        <OutlinedButton
          children="Haritadan seç"
          name="map"
          onPress={haritadaSecFonksiyonu}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mapPreview: {
    width: 330,
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
