import { TestBed } from '@angular/core/testing';

import { ProductListResolverService } from './product-list.resolver.service';
import { of } from 'rxjs';
import { ActivatedRouteSnapshot } from '@angular/router';

describe('ProductListResolverService', () => {

	let service: ProductListResolverService;
	let ecommerceMock: any;

	beforeAll(() => {
		
		ecommerceMock = {
			getProductData: jasmine.createSpy("getProductData").and.returnValue(of({ data: {} }))
		}
	});

	beforeAll(() => {
		service = new ProductListResolverService(ecommerceMock);
	});

	it('should be created', () => {
        const route = new ActivatedRouteSnapshot();
        route.params = { id: 123 };
        expect(service.resolve(route)).toBeTruthy();
	});
});
