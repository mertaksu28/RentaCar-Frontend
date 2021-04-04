import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { NaviComponent } from './components/navi/navi.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RentalComponent } from './components/rental/rental.component';
import { CarDetailDtoComponent } from './components/car-detail-dto/car-detail-dto.component';
import { CarPipePipe } from './pipes/car-pipe.pipe';
import { BrandPipePipe } from './pipes/brand-pipe.pipe';
import { ColorPipePipe } from './pipes/color-pipe.pipe';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { PaymentComponent } from './components/payment/payment.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    NaviComponent,
    ColorComponent,
    CustomerComponent,
    RentalComponent,
    CarDetailDtoComponent,
    CarPipePipe,
    BrandPipePipe,
    ColorPipePipe,
    RentalAddComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: "toast-bottom-right" }),

    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
