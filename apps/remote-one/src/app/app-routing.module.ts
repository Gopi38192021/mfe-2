import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BreedInfoComponent } from './micro-breed-info/breed-info/breed-info.component';
import { RandomGeneratorComponent } from './random-generator/random-generator.component';


const routes: Routes = [
  {
    path:'',
    component:RandomGeneratorComponent
  },
  {
    path:'view-rabbit/:id',
    component:BreedInfoComponent
  }
]
@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
