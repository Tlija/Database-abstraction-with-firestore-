import { Inject, Injectable } from '@angular/core';
import { Database } from '../core/providers/firebase_providers/database_interface_providers';
import {DATABASE_TOKEN} from "../app/database_tokens";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private database: Database;

  constructor(@Inject(DATABASE_TOKEN) database: Database) {
    this.database = database;
  }

  add(collection: string, data: any): Promise<any> {
    return this.database.add(collection, data);
  }

  update(collection: string, id: string, data: any): Promise<any> {
    return this.database.update(collection, id, data);
  }

  delete(collection: string, id: string): Promise<void> {
    return this.database.delete(collection, id);
  }
}
