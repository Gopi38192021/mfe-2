import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ActualRemoteComponent } from './actual-remote/actual-remote.component';


const routes: Routes = [
    {
        path:'remote',
        component: ActualRemoteComponent
    }
]
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RemoteModuleRouting { }