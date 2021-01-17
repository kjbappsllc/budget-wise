import { v4 } from "uuid";

export class Category {
    budgetId: string;
    id: string;
    name: string;
    budgetedAmt: number;
    currentAmt: number;

    public constructor(budgetId: string, name: string) {
        this.budgetId = budgetId;
        this.name = name;
        this.id = v4();
        this.budgetedAmt = 0;
        this.currentAmt = 0;
    }

    public getAvailableAmt(): number {
        return this.budgetedAmt - this.currentAmt;
    }
}