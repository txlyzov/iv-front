import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() updateNotesList: EventEmitter<any> = new EventEmitter();

  @Output() editStageChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  onCreateClick(element:any){
    this.editStageChange.emit({isEditStage: true});
  }

  onSearchClick(condition: string){
    this.updateNotesList.emit(condition);
  }

}
