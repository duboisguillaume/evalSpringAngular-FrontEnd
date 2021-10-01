import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfirmiereListeComponent } from './infirmiere-liste/infirmiere-liste.component';
import { PatientDetailsComponent } from './patient-liste/patient-details/patient-details.component';
import { PatientListeComponent } from './patient-liste/patient-liste.component';

const routes: Routes = [
  {path:'' , redirectTo:'patients', pathMatch:'full'},
  {path:'patients', component:PatientListeComponent},
  {path:'patients/:id', component:PatientDetailsComponent},
  {path:'infirmieres', component:InfirmiereListeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
