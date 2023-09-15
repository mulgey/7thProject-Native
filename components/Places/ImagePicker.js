import { View, StyleSheet, Button, Alert } from "react-native";
// PermissionStatus ve useCameraPermissions'ı iOS için ekledik
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";

export default function ImagePicker() {
  // for iOS
  const [permissionInfo, requestPermission] = useCameraPermissions();

  // for iOS
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
        "Kameraya izin verirseniz işimi halledebilirim"
      );
      // olumsuz dön
      return false;
    }

    // yukarıdaki 2 durum (belli değil / reddedilmiş) izin verilmiş demektir
    return true;
  }

  // launchCameraAsync bir promise getireceği için fonksiyonu async ledik
  async function fotoCekFonksiyonu() {
    const izinAlinmis = await verifyPermissions();

    // izin yoksa süreci burada sessizce bitir
    if (!izinAlinmis) {
      return;
    }

    const image = await launchCameraAsync({
      // onaylamadan önce fotoğrafı düzenleyebilsin
      allowsEditing: true,
      aspect: [16, 9],
      // çok kaliteli, yer tutan olmasın
      quality: 0.5,
    });
    console.log(image);
  }

  return (
    <View>
      <View></View>
      <Button title="Fotoğraf çek" onPress={fotoCekFonksiyonu} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
