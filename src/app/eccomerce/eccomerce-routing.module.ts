import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListResolverService } from './resolvers/product-list.resolver.service';
import { ProductDetailResolverService } from './resolvers/product-detail.resolver.service';


const routes: Routes = [
	{ path: '', resolve: { settings: ProductListResolverService }, children: [
		{ path: 'list', 		component: ProductListComponent },
		{ path: 'detail/:id', 	component: ProductDetailComponent, 	resolve: { settings: ProductDetailResolverService } },
		{ path: '**',           redirectTo: 'list' }
	]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EccomerceRoutingModule { }
