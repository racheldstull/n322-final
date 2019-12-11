import { NotesService } from './../services/notes.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})
export class NotePage implements OnInit {
  private noteId: String;
  private note = {};
  
  private title: String;
  private copy: String;
  private items = {};
  private editOptions = {
    hiddenSave: "hidden",
    hiddenEdit: "",
    disabled: "disabled"
  }
  private editable = false;

  constructor(
    private noteService: NotesService,
    private alertCtrl: AlertController,
    private route: ActivatedRoute,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.noteId = this.route.snapshot.paramMap.get("id");
    this.note = this.noteService.getNoteById(this.noteId);
  }

  updateNote(e){
    let noteTitle = (<HTMLInputElement> document.getElementById("noteTitle")).value;
    let noteCopy = (<HTMLInputElement> document.getElementById("noteCopy")).value;
    this.note = {
      id: this.noteId,
      title: noteTitle,
      copy: noteCopy,
      date: null
    };
    console.log(this.note);
    this.noteService.updateNote(this.note);
  }

  deleteNote(){
    this.alertCtrl.create({
      header: 'Delete',
      message: 'Are you sure you want to delete this note?',
      buttons: [ 
        { 
          text: 'Cancel' 
        }, 
        { 
          text: 'Delete', 
          handler: () => { 
            this.noteService.deleteNote(this.noteId);
            this.navCtrl.navigateRoot('/home');
          } 
        } 
      ] 
    }).then(prompt => { 
      prompt.present(); 
    }); 
  }

  toggleEdit(){
    if(this.editable = true){
      this.editOptions.hiddenSave = "",
      this.editOptions.hiddenEdit = "hidden"
      this.editOptions.disabled = "false"
    } else {
      this.editOptions.hiddenSave = "hidden",
      this.editOptions.hiddenEdit = ""
      this.editOptions.disabled = "true"
    }
  }
}
