// products.resolver.ts
import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product.model';

export const productsResolver: ResolveFn<Product[]> = () => {
  return inject(ProductService).getProducts();
};

// app-routing.module.ts
import { productsResolver } from './products.resolver';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent,
    resolve: { products: productsResolver }
  }
];