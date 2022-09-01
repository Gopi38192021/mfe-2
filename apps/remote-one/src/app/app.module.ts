import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { RemoteStubModule } from './remote-stub/remote-stub.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, RemoteStubModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
