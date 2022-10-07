import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  tasks: any[] = [];
  task = {
    id:null,
    name:'',
    finished: false
  };

  constructor(
    private appService: AppService
  ){

  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.appService.getAll().subscribe((data: any) => this.tasks = data);
  }

  save(){
    if(this.task.id){
      this.appService.update(this.task.id!, this.task).subscribe(()=> this.getAll());
    }else{
    this.appService.create(this.task).subscribe(()=> this.getAll());
  }
    this.task = {
      id:null,
      name:'',
      finished: false
    }
  }

  edit(task:any){
    this.task = {
      ...task
    };
  }

  delete(task:any){
    this.appService.delete(task.id).subscribe(()=> this.getAll());
  }
}
