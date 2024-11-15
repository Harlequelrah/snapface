import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { CommonModule } from '@angular/common';
import { LandingPageModule } from './landing-page/landing-page.module';
import { FaceSnapsModule } from './face-snaps/face-snaps.module';
import { CoreModule } from './core/core.module';
@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule,RouterOutlet, HeaderComponent, CommonModule,LandingPageModule,FaceSnapsModule,CoreModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
