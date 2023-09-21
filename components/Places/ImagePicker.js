import { View, StyleSheet, Alert, Image, Text } from "react-native";

// PermissionStatus ve useCameraPermissions'ı iOS için ekledik
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { useState } from "react";

// constants & UIs
import { Colors } from "../../constants/colors";
import OutlinedButton from "../UI/OutlinedButton";

export default function ImagePicker() {
  const [pickedImage, setPickedImage] = useState();

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

    setPickedImage(image.assets[0]);
  }

  let imagePreview = <Text>Henüz çekilen bir fotoğraf yok.</Text>;

  if (pickedImage) {
    imagePreview = (
      <Image style={styles.image} source={{ uri: pickedImage.uri }} />
    );
  }

  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <OutlinedButton
        children="Fotoğraf çek"
        name="camera"
        onPress={fotoCekFonksiyonu}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imagePreview: {
    width: 330,
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  image: {
    width: 330,
    height: 200,
  },
});
