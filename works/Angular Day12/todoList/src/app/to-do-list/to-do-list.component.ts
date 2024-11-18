import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-to-do-list', 
  standalone: true, 
  templateUrl: './to-do-list.component.html', 
  styleUrls: ['./to-do-list.component.scss'], 
  imports: [CommonModule, FormsModule, TaskItemComponent], 
})
export class ToDoListComponent implements OnInit {
  tasks: { title: string; completed: boolean }[] = [];

  newTask: string = '';

  totalTasks: number = 0;
  completedTasks: number = 0;

  constructor(private taskService: TaskService) {}

  // Lifecycle hook: Initialize task counts by subscribing to TaskService
  ngOnInit() {
    this.taskService.totalTasks$.subscribe((count) => (this.totalTasks = count));
    this.taskService.completedTasks$.subscribe((count) => (this.completedTasks = count));
  }

  addTask() {
    if (this.newTask.trim()) { // Ensure the input is not empty
      this.tasks.push({ title: this.newTask, completed: false });
      this.updateTaskCounts(); // Update counts after adding
      this.newTask = ''; 
    }
  }

  markComplete(task: { title: string; completed: boolean }) {
    task.completed = true;
    this.updateTaskCounts(); // Update counts after marking complete
  }

  deleteTask(task: { title: string; completed: boolean }) {
    this.tasks = this.tasks.filter((t) => t !== task); // Filter out the deleted task
    this.updateTaskCounts(); // Update counts after deletion
  }

  private updateTaskCounts() {
    const total = this.tasks.length; 
    const completed = this.tasks.filter((t) => t.completed).length;
    this.taskService.updateTaskCounts(total, completed); // Notify TaskService
  }
}
