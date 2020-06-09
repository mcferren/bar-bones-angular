import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/eccomerce/_models/product';

export const loadProducts = createAction( '[Product] Load Products', props<{ payload: Product[] }>() ); 
export const loadCurrent  = createAction( '[Product] Load Current',  props<{ payload: number }>() ); 
