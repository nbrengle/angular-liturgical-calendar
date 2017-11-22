import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { GoogleAnalyticsModule, GA_TOKEN } from 'angular-ga';

import { AppComponent } from './app.component';
import { TwoButtonComponent } from './two-button/two-button.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { DayCardComponent } from './day-card/day-card.component';
import { CardContainerComponent } from './card-container/card-container.component';

import { AccountService } from './services/account.service';
import { AnalyticsService } from './services/analytics.service';
import { AvatarService } from './services/avatar.service';
import { LiturgicalCalendarService } from './services/liturgical-calendar.service';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    { path: '', component: CardContainerComponent, pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'profile', component: ProfilePageComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    TwoButtonComponent,
    LoginComponent,
    NavBarComponent,
    ChatBoxComponent,
    ProfilePageComponent,
    DayCardComponent,
    CardContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    GoogleAnalyticsModule.forRoot(),
    RouterModule.forRoot(
        routes,
        { enableTracing: true }
    )
  ],
  providers: [
    AccountService,
    AnalyticsService,
    AvatarService,
    LiturgicalCalendarService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
