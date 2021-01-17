import { IdInject } from './decorators'

@IdInject
export class Category {
    id: string
    groupId: string;
    name: string;
    budgetedAmt: number;
    currentAmt: number;

    public constructor(group: string, name: string) {
        this.groupId = group;
        this.name = name;
        this.budgetedAmt = 0;
        this.currentAmt = 0;
    }

    public getAvailableAmt(): number {
        return this.budgetedAmt - this.currentAmt;
    }
}