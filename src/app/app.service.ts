import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_ = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(){
    return this.http.get(`${API_}/tasks`);
  }

  create(task:any){
    return this.http.post(`${API_}/tasks`, task);
  }

  update(id: string, task:any){
    return this.http.put(`${API_}/tasks/${id}`, task);
  }

  delete(id: string){
    return this.http.delete(`${API_}/tasks/${id}`);
  }
}
