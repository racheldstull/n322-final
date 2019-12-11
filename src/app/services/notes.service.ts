import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'; 
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  public notes = [{
    id: 0,
      title: "Welcome to NotesApp!",
      copy: "To create a new note, click the ⊕ on the bottom of home screen. \n\nTo edit a note, simple click the thing you wish to edit then click save when done.",
      date: "12/11/2019, 12:00:00 PM"
  }];
  public noteCount = 0;
  public loaded: boolean = false; 

  constructor(
    public storage: Storage,
    private datePipe: DatePipe
  ) { }

  load(): Promise<boolean> { 
    return new Promise(resolve => { 
      this.storage.get('notes').then(notes => { 
        if (notes != null) { 
          this.notes = notes;
        } 
        
        this.loaded = true; 
        resolve(true); 
      }); 
    }); 
  } 

  getAllNotes() {
    // this.addNote();
    return this.notes;
  }

  getNote(id) {
    // return this.notes.id;
    for (let i = 0; i < this.notes.length; i++){
      console.log(i, id);
      if (id = this.notes[i].id) {
        return this.notes[i];
      }
    }
  }

  getNoteById(id){
    return this.notes[id];
  }

  addNote(): void {
    let newId = (this.notes.length);
    let newDate = new Date();
    let date = newDate.toLocaleString();
    console.log(date);
    this.notes.push({
      id: newId,
      title: "Untitled",
      copy: "",
      date: date.toString()
    });
    this.save(); 
  }

  getNoteCount() {
    this.noteCount = (this.notes.length);
    return this.noteCount;
  }

  updateNote(note){
    let newDate = new Date();
    let date = newDate.toLocaleString();
    let updatedNote = {
      id: note.id,
      title: note.title,
      copy: note.copy,
      date: date.toString()
    }

    this.notes.splice(note.id, 1)
    this.notes.push(updatedNote);
    this.save();
  }  

  deleteNote(id){
    console.log(id);
    this.notes.splice(id, 1)
    this.save();
  }

  save(): void { 
    this.storage.set('notes', this.notes); 
  } 
}
