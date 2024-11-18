import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item', 
  standalone: true, 
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'], 
  imports: [CommonModule], 
})
export class TaskItemComponent {
  @Input() task!: { title: string; completed: boolean };    // Input property to receive task details from the parent component

  @Output() complete = new EventEmitter<void>();   // Output event emitter to notify the parent when the task is marked complete

  // Output event emitter to notify the parent when the task is deleted
  @Output() delete = new EventEmitter<void>();   // Output event emitter to notify the parent when the task is deleted

  completeTask() {
    this.complete.emit();
  }

  deleteTask() {
    this.delete.emit();
  }
}
