import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IData } from 'src/app/models/data-interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private apiServerUrl = environment.apiServerBaseUrl || 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public createNote(
    note: IData,
  ): Observable<string> {
    return this.http.post(
      `${this.apiServerUrl}/create`,
      note,
      {
        responseType: 'text',
      },
    );
  }

  public getNotes(condition?: string): Observable<IData[]> {
    let params = '';
    if (condition) {
      params += `?&searchCondition=${condition}`;
    }
    return this.http.get<IData[]>(
      `${this.apiServerUrl}/get${params}`,
    );
  }

  public getNote(noteId: number): Observable<IData> {
    return this.http.get<IData>(
      `${this.apiServerUrl}/get/${noteId}`
    );
  }

  public updateNote(noteId: number, updatedNote: IData): Observable<string> {
    return this.http.put(
      `${this.apiServerUrl}/update/${noteId}`,
      updatedNote,
      {
        responseType: 'text',
      },
    );
  }

  public deleteNote(
    id: string,
  ): Observable<string> {
    return this.http.delete(
      `${this.apiServerUrl}/delete/${id}`,
      {
        responseType: 'text',
      },
    );
  }
}
