import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service'
import { IData } from 'src/app/models/data-interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  noteForEdit?: number;

  isEditStage: boolean = false;

  notes: IData[] = [];

  constructor(private noteService: NoteService) { 
  }

  ngOnInit(): void {
    this.updateNotesList();
  }

  onCreateClick(){    
    this.isEditStage = !this.isEditStage;
    if(this.isEditStage){

    }
  }

  onEditClick(){
    this.isEditStage = !this.isEditStage;
  }

  setIsEditStage(params: {isEditStage: boolean,noteIndex?: number} ){
    if(params.noteIndex != undefined){
      this.noteForEdit = params.noteIndex
    } else {
      this.noteForEdit = undefined;
    }

    if(!params.isEditStage){
      this.updateNotesList()
    }
    this.isEditStage = params.isEditStage;
  }

  updateNotesList(searchCondition?: string){
    this.noteService.getNotes(searchCondition).subscribe((res)=>{
      this.notes = res;
    });
  }

  deleteNote(id: string){
    this.noteService.deleteNote(id).subscribe((res)=>{
      if(res){
        this.updateNotesList();
      }
    });
  }

}
