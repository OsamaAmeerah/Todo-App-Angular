import { Component, Input, } from '@angular/core';
import { TasksService } from './tasks.service';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) name! : string;
  @Input({required:true}) id! : string;
   isAddingTask : boolean = false;

  //  private tasksService : TasksService;
  //  constructor(tasksService:TasksService) {
  //     this.tasksService = tasksService;
  //  }

  //? short cut
  constructor(private tasksService:TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.id);
  }

  onStartAddTask() {
     this.isAddingTask = true;
  }

  onCancelTask() {
    this.isAddingTask = false;
  }


}
