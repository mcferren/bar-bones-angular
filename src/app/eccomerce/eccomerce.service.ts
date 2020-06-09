import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './_models/product';
import { Store } from '@ngrx/store';
import { State } from './../state/reducers';
import { productUrl } from './_helpers/urls';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { loadProducts } from '../state/actions/product.actions';

@Injectable({
  providedIn: 'root'
})
export class EccomerceService {

	constructor(private http: HttpClient,
				private store: Store<State>) { }

	getProductData() : Observable<Product[]> {

		return this.http.get<Product[]>( productUrl, {} )
						.pipe(
							tap(list => this.store.dispatch(loadProducts({ payload: list })))
						);
	}
}



		