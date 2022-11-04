import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SettingsComponent } from './settings/settings.component';
import { GeneralSettingsComponent } from './general-settings/general-settings.component';
import { PersnoalSettingsComponent } from './persnoal-settings/persnoal-settings.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [
    SettingsComponent,
    GeneralSettingsComponent,
    PersnoalSettingsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
