import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mfe1RoutingModule } from './mfe1-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { Mfe1Component } from './mfe1.component';
import { RouterModule } from '@angular/router';
import { MaskCardPipe } from '../pipes/mask-card.pipe';


@NgModule({
  declarations: [
    Mfe1Component
  ],
  imports: [
    CommonModule,
    Mfe1RoutingModule,
    ReactiveFormsModule,
    MaskCardPipe
  ]
})
export class Mfe1Module { }
