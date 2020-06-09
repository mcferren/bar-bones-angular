import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailComponent } from './product-detail.component';
import { of } from 'rxjs';
import { Product } from '../_models';

describe('ProductDetailComponent', () => {

	let component: ProductDetailComponent;
	let fbMock: any;
	let storeMock: any;
	let routerMock: any;  

	beforeAll(() => {

		fbMock = {
			group: jasmine.createSpy("group").and.returnValue(of({})),
			patchValue: jasmine.createSpy("patchValue").and.callThrough(),
			get: jasmine.createSpy("get").and.returnValue(of({}))
		};
		storeMock = {
			pipe: jasmine.createSpy("pipe").and.returnValue(of({ data: {} })),
			dispatch: jasmine.createSpy("dispatch").and.callThrough(),
			select: jasmine.createSpy("select").and.returnValue(of(new Product(null)))
		};
		routerMock = {
			navigate: jasmine.createSpy("navigate").and.callThrough()
		};

		component = new ProductDetailComponent(fbMock, storeMock, routerMock);
		
		component.productForm = fbMock.group({});
	});

	it('should create ProductDetailComponent', () => {
		expect(component).toBeTruthy();
		component.ngOnInit();
		expect(component.productDetail$).toBeDefined();
	});
});
