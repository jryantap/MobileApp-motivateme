import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})

export class CameraPage {

  public base64Image: string;

  constructor(private camera: Camera) {

  }

  takePhotos() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true,
      cameraDirection: 1
    }
    this.camera.getPicture(options).then((imageData) => {
      this.base64Image = 'data.image/jpeg;base64, ' + imageData;
    }, (err) => {
      console.log(err);
    })
  }
}

// TODO:  add back button to go home
