import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {ActionSheetController, AlertController, NavController, NavParams} from "ionic-angular";
import {SocialSharing} from "@ionic-native/social-sharing";
import {ImagePicker} from "@ionic-native/image-picker";
import {Storage} from '@ionic/storage';
import {EulaPage} from "../eula/eula";
@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage implements OnInit{

  //arraylist of Firebase
  notes: FirebaseListObservable<any[]>;

  toEulaPage = EulaPage;
  flagCounter: number = 0;
  isFlagged: boolean = false;


  // notes = [];
  // title: string;
  // note: string;

  //constructor
  constructor(private navCtrl: NavController,
              private alertCtrl: AlertController,
              private actionSheetCtrl: ActionSheetController,
              private angularfire: AngularFireDatabase,
              private socialSharing: SocialSharing,
              private imagePicker: ImagePicker,
              private storage: Storage,
              public navParams: NavParams) {


  }

  //load notes right away after initialization
  ngOnInit(){
    this.notes = this.angularfire.list('/notes');

  }

  // ionViewDidLoad(){
  //   this.title = this.navParams.get('notes').note;
  //   this.note = this.navParams.get('notes').note;
  //
  // }

  // save(data){
  //   let newData = JSON.stringify(data);
  //   this.storage.set('notes', newData);
  // }

  // getData() {
  //   return this.storage.get('notes');
  // }


  //add note with alert controller
  addNote(){
    let prompt = this.alertCtrl.create(
      {
        title: "Add note",
        message: "Add your thoughts... ",
        inputs: [
          {
            name: "title",
            placeholder: "Enter the title..."
          },
          {
            name: "note",
            placeholder: "It is a very good day today..."
          }
        ],
        buttons: [
          {
            text: "Cancel",
            handler: data => {
              console.log("Cancel");
            }
          },
          {
            text: "Save",
            handler: data => {
              //save note with date
              var note = {
                title: data.title,
                note: data.note,
                date: new Date().getDate()
              };
              this.notes.push(note);

              // this.notes.push(note);
              // this.save(note);
            }
          }
        ],
        cssClass: 'danger'
      });
    prompt.present();
  }

  //remove note
  // removeNote(noteId: string){
  //   let prompt = this.alertCtrl.create(
  //     {
  //       title: "Delete you note",
  //       message: "Do you really want to delete it?",
  //       buttons:[
  //         {
  //           text: "Cancel",
  //           handler: data => {
  //             console.log("Cancel clicked");
  //           }
  //         },
  //         {
  //           text: "Delete",
  //           handler: data => {
  //             this.notes.remove(noteId);
  //           }
  //         }
  //       ]
  //     });
  //   prompt.present();
  // }

  //update Notes
  updateNote(noteId, noteTitle, noteContent){
    let prompt = this.alertCtrl.create(
      {
        title: "Revise your thoughts",
        message: "Update the data",
        inputs: [
          {
            name: "title",
            value: noteTitle
          },
          {
          name: "note",
          value: noteContent
          }
        ],

        buttons: [
          {
            text: "Cancel",
            handler: data => {
              console.log("Cancel update");
            }
          },
          {
            text: "Save",
            handler: data => {
              this.notes.update(noteId,{
                title: data.title,
                note: data.notes,
                date: new Date().getDate()
              });
            }
          }
        ]
      });
    prompt.present();
  }

  /** FireBase open settings not working, so I rather send new quotes **/

  // pickImage(noteId, noteTitle, noteContent, previousImage){
  //   this.imagePicker.getPictures({
  //     maximumImagesCount: 1,
  //     quality: 70,
  //     outputType: 1
  //   }).then((results) => {
  //     if (results.length == 1) {
  //       if (previousImage != null) {
  //         let prompt = this.alertCtrl.create(
  //           {
  //             title: "Change image",
  //             message: "Do you really want to change the image?",
  //             buttons: [
  //               {
  //                 text: "Cancel",
  //                 handler: data => {
  //                   console.log('Cancel clicked');
  //                 }
  //               },
  //               {
  //                 text: "Change",
  //                 handler: data => {
  //                   this.updateImage(noteId, results[0]);
  //                 }
  //               }
  //             ]
  //           });
  //         prompt.present();
  //       } else {
  //         this.updateImage(noteId, results[0]);
  //       }
  //
  //     }
  //   }, (err) => { });
  // }
  //
  // updateImage(noteId, newImage) {
  //   this.notes.update(noteId,
  //   {
  //     image: 'data:image/jpg;base64,' + newImage,
  //     date: new Date().getTime()
  //     });
  // }
  //
  // removeImage(noteId, noteTitle, noteContent) {
  //   let prompt = this.alertCtrl.create(
  //     {
  //       title: "Delete image",
  //       message: "Do you really want do delete this image?",
  //       buttons: [
  //         {
  //           text: "Cancel",
  //           handler: data => {
  //             console.log('Cancel clicked');
  //           }
  //         },
  //         {
  //           text: "Delete",
  //           handler: data => {
  //             this.notes.update(noteId,
  //               {
  //                 image: null,
  //                 date: new Date().getDate()
  //               });
  //           }
  //         }
  //       ]
  //     });
  //   prompt.present();
  //
  // }

  //shareNote
  shareNote(noteTitle, noteContent, noteImage){
    this.socialSharing.share(noteTitle, noteTitle, noteImage, "\n" + noteContent).then(()=>{
      console.log("Note Shared succesfully.");
    }).catch(() =>{
      console.log("It was not shared.");
    });
  }

  showDate(date){
    return new Date(date);
  }

  noteIsFlagged(noteId){
    this.isFlagged = true;
    this.flagCounter+=1;
    if(this.flagCounter == 3){
      this.notes.remove(noteId);
    }
    console.log(this.flagCounter);
  }
}
