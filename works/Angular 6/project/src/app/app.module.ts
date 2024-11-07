// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminGuard } from './guards/admin.guard';
import { UserGuard } from './guards/user.guard';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [AdminGuard, UserGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
