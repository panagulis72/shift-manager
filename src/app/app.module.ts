import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserElementComponent } from './users/user-list/user-element/user-element.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent }
]

@NgModule({
  // Tutti i componenti bisogna dichiararli
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    UserListComponent,
    UserDetailComponent,
    UserElementComponent,
    SidebarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  // Bootstrap dell'AppComponent una volta che Angular avvia il progetto, quindi il componente dell'index.html
  bootstrap: [AppComponent]
})
export class AppModule { }
