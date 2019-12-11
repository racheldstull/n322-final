import { NotesService } from './../services/notes.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private homeNotes: {};
  private noteCount: Number;

  constructor(
    private noteService: NotesService,
    private alertCtrl: AlertController 
  ) {}

  ngOnInit() {
    this.homeNotes = this.noteService.getAllNotes();
    this.noteCount =  this.noteService.getNoteCount();
    console.log(this.homeNotes);
  }

  addNewPost() {
    this.noteService.addNote();
  }
}
