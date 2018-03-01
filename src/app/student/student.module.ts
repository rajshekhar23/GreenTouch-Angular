import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    SharedModule,
    StudentRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBZib4Lvp0g1L8eskVBFJ0SEbnENB6cJ-g'
    })
  ],
  declarations: [],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class StudentModule { }
