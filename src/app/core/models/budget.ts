import { v4 } from 'uuid';

export class Budget {
    name: string;
    paycheck: number;
    id: string;

    constructor(name: string, paycheck: number) {
        this.name = name;
        this.paycheck = paycheck;
        this.id = v4();
    }
}