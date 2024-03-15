import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Database } from './database_interface_providers';

@Injectable({
  providedIn: 'root',
})
export class FirestoreDatabase implements Database {
  constructor(private firestore: AngularFirestore) {}

  async add(collection: string, data: any): Promise<string> {
    const docRef = await this.firestore.collection(collection).add(data);
    return docRef.id;
  }

  async update(collection: string, id: string, data: any): Promise<void> {
    await this.firestore.collection(collection).doc(id).update(data);
  }

  async delete(collection: string, id: string): Promise<void> {
    // Already correct
    await this.firestore.collection(collection).doc(id).delete();
  }
}
