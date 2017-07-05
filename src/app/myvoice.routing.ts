import { ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';

import {MainComponent} from './main/main.component';
import { RantComponent } from './main/rant/rant.component';
// import { NotfoundComponent } from  './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './main/home/home.component';
import { ComplaintComponent } from './main/complaint/complaint.component';

// import { AuthGuard } from './services/auth-guard.service';

const MyVoiceRoutes:Routes = [
    
     { path : 'login', component : LoginComponent },

     { path : 'main', component : MainComponent, children:[
          { path : '',
            component : HomeComponent,
          },
          { path : 'rant',
            component : RantComponent,
          },
          { path: 'complaint', component: ComplaintComponent }
        ] 
        // canActivate:[AuthGuard]
      },

      { path: '',  redirectTo: '/main', pathMatch: 'full' },

      

];
 

export const MyVoiceRouting: ModuleWithProviders = RouterModule.forRoot(MyVoiceRoutes);