import {Component, OnInit, signal, Signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DatabaseService} from "../services/database_service_provider";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  constructor(private databaseService: DatabaseService) {}

ngOnInit() {
    this.databaseService.add('users',{
      name: 'tlija',
      email: 'tlija@gmail.com',
      age: 26
    }).then((docId)=>{
      console.log('Document ajouté avec l\'ID : ', docId);
    })
}

}
