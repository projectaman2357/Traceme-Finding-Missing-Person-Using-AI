import { useState, useEffect } from 'react';
import { isPlatform } from '@ionic/react';
import { Camera, CameraResultType, CameraSource } from '@capacitor/core';
import { Filesystem, Directory } from '@capacitor/filesystem';

export function usePhotoGallery() {
  const [photos, setPhotos] = useState([]);

  const loadSaved = async () => {
    const photoList = await Filesystem.readdir({
      path: '',
      directory: Directory.Data,
    });

    const loadedPhotos = [];
    for (const filename of photoList.files) {
      const photo = await Filesystem.readFile({
        path: filename,
        directory: Directory.Data,
      });

      loadedPhotos.push({
        filepath: filename,
        webviewPath: isPlatform('hybrid')
          ? photo.data
          : `data:image/jpeg;base64,${photo.data}`,
      });
    }
    setPhotos(loadedPhotos);
  };

  useEffect(() => {
    loadSaved();
  }, []);

  const takePhoto = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      source: CameraSource.Camera, // or CameraSource.Photos for gallery
      resultType: CameraResultType.Base64, // or CameraResultType.Uri for file path
    });

    const fileName = new Date().getTime() + '.jpeg';
    await Filesystem.writeFile({
      path: fileName,
      data: image.base64String,
      directory: Directory.Data,
    });

    const newPhoto = {
      filepath: fileName,
      webviewPath: isPlatform('hybrid')
        ? image.base64String
        : `data:image/jpeg;base64,${image.base64String}`,
    };

    setPhotos([newPhoto, ...photos]);
  };

  return {
    photos,
    takePhoto,
  };
}