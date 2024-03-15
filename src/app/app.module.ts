import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {DATABASE_TOKEN} from "./database_tokens";
import {FirestoreDatabase} from "../core/providers/firebase_providers/firstore_providers";
import {DatabaseService} from "../services/database_service_provider";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    DatabaseService,
    {
      provide: DATABASE_TOKEN,
      useClass: FirestoreDatabase,
    },
  ]
})
export class AppModule { }
