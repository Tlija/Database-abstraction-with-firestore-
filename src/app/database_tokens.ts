import { InjectionToken } from '@angular/core';
import {Database} from "../core/providers/firebase_providers/database_interface_providers";

export const DATABASE_TOKEN = new InjectionToken<Database>('Database instance');
