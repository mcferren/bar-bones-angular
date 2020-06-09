import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EccomerceService } from '../eccomerce.service';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { loadCurrent } from 'src/app/state/actions/product.actions';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state/reducers';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailResolverService implements Resolve<Observable<boolean>>  {

	constructor(private store: Store<State>) {}

	resolve( route: ActivatedRouteSnapshot ) {

		const { id } = route.params;

		this.store.dispatch(loadCurrent({ payload: id }));

		return of( true );
	}
}
