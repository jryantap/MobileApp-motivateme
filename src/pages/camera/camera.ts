import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})

export class CameraPage {
  base64Image: string;

  constructor(
    private camera: Camera,
    private toastController: ToastController){
  }

  takePhotos() {
    const options: CameraOptions = {
      quality: 75,
      destinationType: this.camera.DestinationType.DATA_URL,
      cameraDirection: this.camera.Direction.FRONT,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      targetWidth: 500,
      targetHeight: 500,
      saveToPhotoAlbum: true,
      allowEdit: false
    }
    this.camera.getPicture(options).then((imageData) => {
      this.base64Image = "data:image/jpeg;base64," + imageData;
      let cameraImageSelector = document.getElementById('camera-image');
      cameraImageSelector.setAttribute('src', this.base64Image);
    }, (err) => {
      const toast = this.toastController.create({
        message: 'Could not take the image.  Please try again',
      });
      toast.present();
      console.log(err);
    })
  }

  // TO DO:  add a social sharing button here using base64Image, may work
  // check online how to do it
  shareViaInstagram(){

  }
}

