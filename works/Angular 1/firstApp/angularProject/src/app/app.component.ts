import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,            // Indicate that this is a standalone component
  imports: [FormsModule]       // Import FormsModule directly here
})
export class AppComponent {
  onSubmit(form: any) {
    if (form.valid) {
      alert('Thank you for contacting us!');
      form.reset();
    }
  }
}
