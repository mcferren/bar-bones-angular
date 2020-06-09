import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/state/reducers';
import { Observable } from 'rxjs';
import { Product } from '../_models/product';
import { getProductList } from 'src/app/state/selectors/product.selector';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

	productList$ : Observable<Product[]>;

	constructor(private store : Store<State>) { }

	ngOnInit(): void {

		this.productList$ = this.store.pipe(select(getProductList));
	}
}
