import { Product } from './product';
import { Field } from './field';

export class Tshirt extends Product {

    standardFields: Field[];

    constructor(input: Product) {

        super(input);

        this.standardFields = [ new Field("Shirt Size", "size") ];
    }
}