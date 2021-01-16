import { Budget } from "../../models/budget";

export interface DatabaseSchema {
    budgets: Budget []
}

export const defaultSchema: DatabaseSchema = {
    budgets: []
}