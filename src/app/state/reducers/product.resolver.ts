import { Action, createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/eccomerce/_models/product';
import { loadProducts, loadCurrent } from '../actions/product.actions';
import { mapProduct } from './product.helper';

export const productFeatureKey = 'product';

export interface ProductState {
      list: Product[];
      current: Product;
}
export const initialState: ProductState = {
      list: [],
      current: null
};
const productReducer = createReducer(
    initialState,
    on(loadProducts, (state, { payload }) => ({ ...state, list: payload })),
    on(loadCurrent,  (state, { payload }) => ({ ...state, current: mapProduct( state, payload ) }))
);
export function reducer(state: ProductState | undefined, action: Action) {
  return productReducer(state, action);
}
