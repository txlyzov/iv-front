import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IData } from 'src/app/models/data-interface';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.scss']
})
export class NoteEditorComponent implements OnInit {

  title?: string;

  noteEntity: IData = {
    message: '',
    hashtags: [],
  };
  
  @Input() noteId?: number;

  @Output() return: EventEmitter<any> = new EventEmitter();

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    if(this.noteId != undefined){
      this.title = 'Edit'
      this.noteService.getNote(this.noteId).subscribe((res)=>{
        this.noteEntity = res;
      });
    } else {
      this.title = 'Create'
    }
  }

  updateMessage(message: string){
    this.noteEntity.message = message;
    this.noteEntity.hashtags = message.match(/#[A-zА-я]+/g) || [];    
  }

  onSaveClick(){
    this.noteId != undefined ? this.saveExistNote() : this.saveNewNote();
  }

  saveNewNote(){
    this.noteService.createNote(this.noteEntity).subscribe((res)=>{
      this.return.emit({isEditStage: false});
    });
  }

  saveExistNote(){
    this.noteService.updateNote(this.noteId!,this.noteEntity!).subscribe((res)=>{
      this.return.emit({isEditStage: false});
    });
  }

  onDiscardClick(){
    this.return.emit({isEditStage: false});
  }
}
