import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { FormPageComponent } from './form-page/form-page.component';

@Injectable({
  providedIn: 'root',
})
export class DeactivateGuard implements CanDeactivate<FormPageComponent> {
  canDeactivate(component: FormPageComponent): boolean {
    return component.isFormDirty()
      ? confirm('You have unsaved changes. Do you really want to leave?')
      : true;
  }
}
