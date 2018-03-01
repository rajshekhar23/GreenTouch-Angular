import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { SharedModule } from './shared/shared.module';
import { StudentModule } from './student/student.module';
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
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBZib4Lvp0g1L8eskVBFJ0SEbnENB6cJ-g'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
