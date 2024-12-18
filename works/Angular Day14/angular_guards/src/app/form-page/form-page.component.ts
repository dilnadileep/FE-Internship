import { Component } from '@angular/core';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'], 

})
export class FormPageComponent {
  formData = { name: '', email: '' };

  isFormDirty() {
    return this.formData.name !== '' || this.formData.email !== '';
  }
}
