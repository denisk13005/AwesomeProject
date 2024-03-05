import { Camera } from 'expo-camera';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef(null);
  const [photoUri, setPhotoUri] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      let photo = await cameraRef.current.takePictureAsync();
      console.log(photo.uri);
      setPhotoUri(photo.uri); // Stockez l'URI de la photo pour afficher la prévisualisation
    }
  };

  const savePhoto = async () => {
    const formData = new FormData();
    console.log(photoUri,'photo uri')
    // formData.append('photo', {
    //   uri: photoUri,
    //   type: 'image/jpeg', // Ou le type MIME correct de votre image
    //   name: 'photo.jpg',
    // });
  
    // try {
    //   await fetch('URL_DE_VOTRE_API_DE_TELECHARGEMENT', {
    //     method: 'POST',
    //     body: formData,
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   });
      
    //   // Gérez la réponse de votre serveur ici, par exemple en affichant un message de succès
    //   alert('Photo enregistrée avec succès!');
    //   setPhotoUri(null); // Réinitialisez l'URI de la photo pour permettre une nouvelle capture
    // } catch (error) {
    //   console.error(error);
    //   alert('Erreur lors de l\'enregistrement de la photo.');
    // }
  };
  

  if (hasPermission === null || hasPermission === false) {
    return <View />;
  }

  return (
    <View style={styles.container}>
    {photoUri ? (
      <View style={{ flex: 1 }}>
        <Image source={{ uri: photoUri }} style={{ flex: 1 }} />
        <Button title="Save Photo" onPress={savePhoto} />
        <Button title="Retake" onPress={() => setPhotoUri(null)} />
      </View>
    ) : (
      <Camera style={styles.camera} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <Button title="Take Picture" onPress={takePicture} />
        </View>
      </Camera>
    )}
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
});
