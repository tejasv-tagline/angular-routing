import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralSettingsComponent } from './general-settings/general-settings.component';
import { PersnoalSettingsComponent } from './persnoal-settings/persnoal-settings.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path:'setting',
    component:SettingsComponent,
    children:[
      {
        path:'general',
        component:GeneralSettingsComponent
      },
      {
        path:'persnoal',
        component:PersnoalSettingsComponent
      }
    ]
  },
  {
    path:'**',
    redirectTo:'setting'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
