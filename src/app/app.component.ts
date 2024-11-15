import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  interval$!: Observable<string>


  logger(text: string): void {
    console.log(`Log: ${text}`);
  }
  ngOnInit(): void {
}

}







