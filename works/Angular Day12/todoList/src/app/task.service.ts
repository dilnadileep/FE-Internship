import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root', 
})
export class TaskService {
  private totalTasksSubject = new BehaviorSubject<number>(0);     // BehaviorSubject to track the total number of tasks

  private completedTasksSubject = new BehaviorSubject<number>(0);     // BehaviorSubject to track the number of completed tasks

  totalTasks$ = this.totalTasksSubject.asObservable();      // Observables to expose the task counts for subscription
  completedTasks$ = this.completedTasksSubject.asObservable();

  updateTaskCounts(total: number, completed: number) {    // Method to update the total and completed task counts
    this.totalTasksSubject.next(total); // Update the total tasks count
    this.completedTasksSubject.next(completed); // Update the completed tasks count
  }
}
