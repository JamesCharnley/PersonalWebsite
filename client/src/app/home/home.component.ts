import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  response: string = "";
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<string>(this.baseUrl + 'test').subscribe({
      next: response => this.response = response,
      error: error => console.log(error),
      complete: () => console.log('Request has completed')
    })
  }

}
