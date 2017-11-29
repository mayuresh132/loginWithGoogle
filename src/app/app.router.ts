import { HomePageComponent } from './home-page/home-page.component';
import {Routes, RouterModule} from '@angular/router';
import { MessResultComponent } from './mess-result/mess-result.component';


const routes: Routes = [
  // {path : 'login', component: HomePageComponent},
  {path : '', component: HomePageComponent},
  {path : 'demo', component: MessResultComponent }

];

export const MyRouterModule = RouterModule.forRoot(routes);
