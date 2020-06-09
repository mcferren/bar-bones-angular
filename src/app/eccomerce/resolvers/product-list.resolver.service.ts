import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EccomerceService } from '../eccomerce.service';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductListResolverService implements Resolve<Observable<any>>  {

	constructor(private eccomerceService: EccomerceService) {}

	resolve( route: ActivatedRouteSnapshot ) {
		return this.eccomerceService.getProductData();
	}
}
