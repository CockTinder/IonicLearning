import { Component } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public actionSheetCtrl: ActionSheetController) {
    this.actionSheetTest()
  }

  actionSheetTest() {
    let actionSHeet = this.actionSheetCtrl.create({
      title:  'Hallo Welt',
      buttons: [{
        text: "Welt 1", 
        role: 'destructive',
        handler: () => {
          console.log("test")
        }
      },{
        text: "Welt2",
        handler: () => {
          console.log("Welt2")
        }
      }]
    });
    actionSHeet.present()
  }
}
