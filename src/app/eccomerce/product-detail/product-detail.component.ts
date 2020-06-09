import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/state/reducers';
import { Observable } from 'rxjs';
import { Product } from '../_models/product';
import { getCurrentProduct } from 'src/app/state/selectors/product.selector';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { Field } from '../_models/field';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  
	productDetail$ : Observable<Product>;
	productForm: FormGroup;
	fieldList: Field[];

	constructor(public formBuilder: FormBuilder,
				public store : Store<State>,
				public router: Router) { }

	ngOnInit(): void {

		this.productDetail$ = this.store.pipe(select(getCurrentProduct));

		this.productDetail$.subscribe(product => {

			if( !product ) { this.router.navigate(['/']); 	return; }
			
			this.fieldList = [ ...product.standardFields || [], ...product.customFields || []];

			let group = {
				quantity: new FormControl(''),
				zipcode: new FormControl(''),
			};

			this.fieldList.forEach(field => {
				group[ field.fieldName ] = new FormControl('');
			});

			this.productForm = this.formBuilder.group(group);
		})
	}

	onSubmit() {
		console.log("product", this.productForm.value);
	}
}
