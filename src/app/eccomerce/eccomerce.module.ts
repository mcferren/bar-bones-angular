import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EccomerceRoutingModule } from './eccomerce-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListResolverService } from './resolvers/product-list.resolver.service';
import { ProductDetailResolverService } from './resolvers/product-detail.resolver.service';


@NgModule({
	declarations: [ProductListComponent, ProductDetailComponent],
	imports: [
		CommonModule,
		EccomerceRoutingModule,
		ReactiveFormsModule
	],
    providers: [
		ProductDetailResolverService,
		ProductListResolverService
	]
})
export class EccomerceModule { }
