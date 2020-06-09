import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromProduct from './product.resolver';


export interface State {

	[fromProduct.productFeatureKey]: fromProduct.ProductState;
}

export const reducers: ActionReducerMap<State> = {

	[fromProduct.productFeatureKey]: fromProduct.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
