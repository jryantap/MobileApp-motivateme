import { Component } from '@angular/core';
import {ToastController } from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
import { SocialSharing } from '@ionic-native/social-sharing';



@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})

export class CameraPage {
  base64Image: string;
  hasTakenPicture: boolean = false;

  //this will be an array of string that will be shown after user picture is displayed on the template
  messages: string[] =['YOU LOOK GREAT!', 'YOU ALWAYS LOOK GREAT', 'SO COOL!',
                       'LOOK OUT WORLD!', 'GREAT SENSE OF STYLE!', 'YOU ARE ENOUGH',
                       'YOU\'RE ONE OF A KIND','YOU\'RE INSPIRING!', 'FLATTER YOURSELF!'];

  constructor(
    private camera: Camera,
    private toastController: ToastController,
    private socialSharing: SocialSharing){
  }

  //used for random text
  randomize(){
    var rand = Math.floor((Math.random() * this.messages.length));
    return rand;
  }
  text = this.messages[this.randomize()];


  //this is ionic's native camera feature documentation
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
      saveToPhotoAlbum: false,
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
        duration: 3000
      });
      toast.present();
      console.log(err);
    })
  }

  // TO DO:  add a social sharing button here using base64Image,
  // check Ionic documentation on how to do it
  shareViaInstagram(){
    this.socialSharing.shareViaInstagram('I used MotivateMe app to share this picture!', this.base64Image).then(() =>{
      console.log('Shared!');
    }).catch((error: any) => {
      console.error(error)
    });
  }

  //twitter share button
  shareViaTwitter() {
    this.socialSharing.shareViaTwitter
    ('I used MotivateMe app to share this picture!', this.base64Image, 'http://www.nerdetitan.com/')
      .then(() => {
    }).catch((error: any) => {
    });
  }

  //share to text
  shareViaWhatsApp(){
    this.socialSharing.shareViaWhatsApp('I used MotivateMe app to share my picture!', this.base64Image, 'http://www.nerdetitan.com').then(() => {
    })
    .catch((error:any)=>{

    })
  }
}

