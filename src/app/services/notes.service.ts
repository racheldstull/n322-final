import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private notes = [
    {
      id: 0,
      title: "Welcome to NotesApp!",
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget nunc et dui commodo commodo sed nec lorem. Phasellus nisl dolor, rhoncus vitae rutrum eget",
      date: ""
    }
  ];

  public noteCount = 0;

  constructor() { }

  
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
    let date = new Date();
    let newNote = {
      id: newId,
      title: "Untitled",
      copy: "",
      date: date.toString()
    }

    this.notes.push(newNote);
  }

  getNoteCount() {
    this.noteCount = (this.notes.length);
    return this.noteCount;
  }

  updateNote(note){
    let date = new Date();
    let updatedNote = {
      id: note.id,
      title: note.title,
      copy: note.copy,
      date: date.toString()
    }

    console.log(updatedNote);

    this.notes.splice(note.id, 1)
    this.notes.push(updatedNote);
  }  
}
