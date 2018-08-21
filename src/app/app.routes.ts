import { ProductCreateComponent } from './product-create/product-create.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { AlbumsComponent } from './albums/albums.component';
import { FormDetailsComponent } from './form-details/form-details.component';
import { CartComponent } from './cart/cart.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'albums', pathMatch: 'full' },
  { path: 'albums', component: AlbumsComponent},
  { path: 'cart', component: CartComponent},
  { path: 'form', component: FormDetailsComponent},
  {
    path: 'product-create',
    component: ProductCreateComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: '**', redirectTo: 'products' }
];

