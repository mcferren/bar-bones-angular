import { ProductState } from './product.resolver';
import * as models from './../../eccomerce/_models';

export function mapProduct( state: ProductState, id: number ) {

    const raw = state.list.find(product => product.id == id);

    if( !raw ) { return null; }

    switch( true ) {
        case raw.productType == 1 : return new models['Tshirt']( raw );
        case raw.productType == 2 : return new models['Custom']( raw );
    }
}