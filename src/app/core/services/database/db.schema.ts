import { Budget } from "../../models/budget";
import { CategoryGroup } from '../../models/group';

export interface DatabaseSchema {
    budgets: Budget []
    groups: CategoryGroup []
}

export const defaultSchema: DatabaseSchema = {
    budgets: [],
    groups: []
}