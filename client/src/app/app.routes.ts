import { Routes } from '@angular/router';
import {AppComponent} from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./features/game/game.component').then(m => m.GameComponent)
      }
    ]
  }
];
