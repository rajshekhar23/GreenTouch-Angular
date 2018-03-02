import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullScreenVideoComponent } from './full-screen-video/full-screen-video.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ListPaintCategoryItemsComponent } from './list-paint-category-items/list-paint-category-items.component';
import { ProductsRangeComponent } from './products-range/products-range.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PolicyTermsComponent } from './policy-terms/policy-terms.component';
import { QualityComponent } from './quality/quality.component';

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      component: FullScreenVideoComponent
    },
    {
      path: 'aboutus',
      component: AboutusComponent
    },
    {
      path: 'paintcategorylist/:categoryId',
      component: ListPaintCategoryItemsComponent
    },
    {
      path: 'productsrange',
      component: ProductsRangeComponent
    },
    {
      path: 'contactus',
      component: ContactusComponent
    },
    {
      path: 'policy',
      component: PolicyTermsComponent
    },
    {
      path: 'quality',
      component: QualityComponent
    }
  ])],
  exports: [RouterModule],
})

export class AppRoutingModule { }
