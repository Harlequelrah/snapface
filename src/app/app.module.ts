import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FaceSnapsModule } from './face-snaps/face-snaps.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { CoreModule } from './core/core.module';
@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, CommonModule,LandingPageModule,FaceSnapsModule,CoreModule,RouterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
