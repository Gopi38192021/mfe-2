import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MicroBreedInfoRoutingModule } from './micro-breed-info-routing.module';
import { BreedInfoComponent } from './breed-info/breed-info.component';

@NgModule({
  declarations: [BreedInfoComponent],
  imports: [CommonModule, MicroBreedInfoRoutingModule],
})
export class MicroBreedInfoModule {}
