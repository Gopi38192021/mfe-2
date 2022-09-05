import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { MicroBreedInfoModule } from './micro-breed-info/micro-breed-info.module';
import { MicroBreedInfoRoutingModule } from './micro-breed-info/micro-breed-info-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RandomGeneratorComponent } from './random-generator/random-generator.component';

@NgModule({
  declarations: [AppComponent, RandomGeneratorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    MicroBreedInfoModule,
    MicroBreedInfoRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
