import { Routes } from '@angular/router';
import { MercuryComponent } from './mercury/mercury.component';
import { VenusComponent } from './venus/venus.component';
import { EarthComponent } from './earth/earth.component';
import { MarsComponent } from './mars/mars.component';
import { JupiterComponent } from './jupiter/jupiter.component';
import { SaturnComponent } from './saturn/saturn.component';
import { UranusComponent } from './uranus/uranus.component';
import { NeptuneComponent } from './neptune/neptune.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'mercury', component: MercuryComponent },
  { path: 'venus', component: VenusComponent },
  { path: 'earth', component: EarthComponent },
  { path: 'mars', component: MarsComponent },
  { path: 'jupiter', component: JupiterComponent },
  { path: 'saturn', component: SaturnComponent },
  { path: 'uranus', component: UranusComponent },
  { path: 'neptune', component: NeptuneComponent },
  { path: '', redirectTo: '/earth', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
