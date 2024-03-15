export interface Database {
  add(collection: string, data: any): Promise<string>;

  update(collection: string, id: string, data: any): Promise<void>;

  delete(collection: string, id: string): Promise<void>;
}
