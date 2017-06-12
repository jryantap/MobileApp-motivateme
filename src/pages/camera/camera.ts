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
  hasTakenPicture: boolean = false;
  messages: string[] =['YOU LOOK GREAT!', 'YOU ALWAYS LOOK AWESOME', 'SO COOL!',
                       'LOOK OUT WORLD!', 'GREAT SENSE OF STYLE!', 'YOU ARE ENOUGH',
                       'YOU\'RE ONE OF A KIND','YOU\'RE INSPIRING!', 'FLATTER YOURSELF!'];
  
  constructor(
    private camera: Camera,
    private toastController: ToastController){
  }

  //used for random text
  randomize(){
    var rand = Math.floor((Math.random() * this.messages.length));
    return rand;
  }
  text = this.messages[this.randomize()];


  // this is ionic's native camera feature documentation
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
    //save picture and display it to template
    this.camera.getPicture(options).then((imageData) => {
      this.hasTakenPicture = true;  //will show image to template
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

