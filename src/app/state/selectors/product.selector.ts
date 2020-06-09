import { State } from '../reducers';
import { createSelector } from '@ngrx/store';

export const selectProviderState = (state: State) => state.product;
export const getProductList = createSelector(
    selectProviderState,
    store => store.list
);
export const getCurrentProduct = createSelector(
    selectProviderState,
    store => store.current
);