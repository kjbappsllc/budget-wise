import { Injectable } from '@angular/core';
import { ElectronService } from '../electron/electron.service';
import * as Lowdb from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync';
import { LowdbSync } from 'lowdb';
import { defaultSchema, DatabaseSchema } from './db.schema'
import { Budget } from '../../models/budget';

@Injectable({
    providedIn: 'root'
})
export class LowDBService {

    private lowdbImport: typeof Lowdb;
    private fileSyncImport: typeof FileSync;
    db: LowdbSync<DatabaseSchema>;

    constructor(electron: ElectronService) {
        if (electron.isElectron) {
            this.lowdbImport = window.require('lowdb');
            this.fileSyncImport = window.require('lowdb/adapters/FileSync');
            const adapter = new this.fileSyncImport('db.json');
            this.db = this.lowdbImport(adapter);
            this.db.defaults(defaultSchema)
                .write();
        }
    }

    public getBudgets(): Budget [] {
        return this.db.get('budgets').value();
    }

    public getBudgetById(id: string): Budget {
        return this.db.get('budgets')
            .find({ id })
            .value();
    }

    public addBudget(budget: Budget) {
        this.db.get('budgets')
            .push(budget)
            .write();
    }
}