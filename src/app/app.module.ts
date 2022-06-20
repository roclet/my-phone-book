import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StateManagementModule } from './state/state.module';
import { LoaderComponent, LoaderHeadingDirective, LoaderIconDirective, LoaderSubHeadingDirective, ProgressLoaderComponent } from './loader/loader.component';
import { CommonModule } from '@angular/common';
import { LoaderService } from './loader/loader.service';
import { HomeComponent } from './blocks/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomHeaderComponent } from './layouts/header/header.component';
import { CardComponent } from './layouts/card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicAuthInterceptor } from './shared/services/basic-auth.interceptor';
import { PhoneBookService } from './shared/services/phone-bookservice';


@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    ProgressLoaderComponent,
    HomeComponent,
    CustomHeaderComponent,
    CardComponent,
    LoaderIconDirective,
    LoaderHeadingDirective,
    LoaderSubHeadingDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StateManagementModule.forRoot(),
  ],
  exports: [
    LoaderComponent, 
    ProgressLoaderComponent, 
    LoaderIconDirective, 
    LoaderHeadingDirective, 
    LoaderSubHeadingDirective,
    CardComponent
  ],
  providers: [LoaderService,PhoneBookService,{ provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
