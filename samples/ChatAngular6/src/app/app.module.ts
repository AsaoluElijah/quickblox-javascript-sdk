import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/home/pages/login/login.component';
import { DashboardComponent } from './modules/home/pages/dashboard/dashboard.component';
import { DialogComponent } from './modules/home/pages/dialog/dialog.component';
import { AuthGuard } from './core/guards/auth.guard';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatButtonToggleModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
