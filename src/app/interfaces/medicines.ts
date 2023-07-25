import { Base } from "./base";
import { Categories } from "./categories";

export interface Medicines extends Base{
    id: number,
    name: string,
    categoryId: number,
    description: string;
    use: string,
    category?: Categories
}