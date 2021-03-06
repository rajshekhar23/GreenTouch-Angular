import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ListPaintCategoryItemsComponent } from './list-paint-category-items/list-paint-category-items.component';
import { ProductsRangeComponent } from './products-range/products-range.component';
import { ContactusComponent } from './contactus/contactus.component';
import { QualityComponent } from './quality/quality.component';
import { PolicyTermsComponent } from './policy-terms/policy-terms.component';
import { FullScreenVideoComponent } from './full-screen-video/full-screen-video.component';
import { AgmCoreModule } from '@agm/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductPortfolioComponent } from './product-portfolio/product-portfolio.component';
import { ProductBrochureComponent } from './product-brochure/product-brochure.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NumberDirective } from './number.directive';
import { CharacterDirective } from './character.directive';
import { SiteMapComponent } from './site-map/site-map.component';
import { AllProductsGridComponent } from './all-products-grid/all-products-grid.component';
import { DomSanitizer } from '@angular/platform-browser';
@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ListPaintCategoryItemsComponent,
    ProductsRangeComponent,
    ContactusComponent,
    QualityComponent,
    PolicyTermsComponent,
    FullScreenVideoComponent,
    HeaderComponent,
    FooterComponent,
    ProductPortfolioComponent,
    ProductBrochureComponent,
    NumberDirective,
    CharacterDirective,
    SiteMapComponent,
    AllProductsGridComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBZib4Lvp0g1L8eskVBFJ0SEbnENB6cJ-g'
    })
  ],
  providers: [{
    provide: LocationStrategy, useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
