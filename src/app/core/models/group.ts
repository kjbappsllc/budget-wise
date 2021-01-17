import { Category } from "./category";
import { IdInject } from './decorators'

@IdInject
export class CategoryGroup {
    id: string;
    public budgetId: string;
    public categories: Category [];

    public constructor(budgetId: string, categories?: Category []) {
        this.budgetId = budgetId;
        this.categories = categories ?? [];
    }
}