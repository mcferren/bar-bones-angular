import { Field } from './field';

export class Product {
    id: number;
    productType: number;
    name: string;
    customFields?: Field[];
    standardFields?: Field[];

    constructor(input: Product) {

        if( !input ) { return; }
            
        this.id = input.id;
        this.name = input.name;
        this.productType = input.productType;
        this.customFields = input.customFields;
    }
}