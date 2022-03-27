import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Input() noteData: any;

  @Output() editStageChange: EventEmitter<any> = new EventEmitter();

  @Output() deleteNote: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onEditClick(){
    this.editStageChange.emit({ isEditStage :true,noteIndex: this.noteData.index});
  }

  onDeleteClick(){
    this.deleteNote.emit(this.noteData.index);
  }

}
