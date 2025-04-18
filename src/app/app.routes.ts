import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { dragonballPageComponent } from './pages/dragonball/dragonball-page.component';


export const routes: Routes = [
    //muchas rutas 
    {
        path:'',
        component: CounterPageComponent,
    },
    {
        path: 'hero',
        component: HeroPageComponent,
    },
    {
        path:'dragonball',
        component:dragonballPageComponent,
    },
    //redirecciona a una pagina por defecto
    {
        path:'**',
        redirectTo:'',
    }
];
