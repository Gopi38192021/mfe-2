import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActualRemoteComponent } from './actual-remote/actual-remote.component';
import { RemoteModuleRouting } from './remote-routing.module'

@NgModule({
  declarations: [ActualRemoteComponent],
  imports: [CommonModule, RemoteModuleRouting],
})
export class RemoteStubModule {}
