import { IdInject } from './decorators'

@IdInject
export class Budget {
    id: string
    name: string;
    paycheck: number;

    constructor(name: string, paycheck: number) {
        this.name = name;
        this.paycheck = paycheck;
    }
}