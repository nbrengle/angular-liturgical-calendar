import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TwoButtonComponent } from './two-button/two-button.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'settings', redirectTo: 'home' },
    { path: 'dashboard', redirectTo: 'home' },
    { path: '**', redirectTo: 'home' }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TwoButtonComponent,
    LoginComponent,
    NavBarComponent,
    ChatBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    RouterModule.forRoot(
        routes,
        { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
