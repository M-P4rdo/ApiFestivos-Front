import { Routes } from '@angular/router';
import { ListarFestivosComponent } from './features/componentes/listar-festivos/listar-festivos.component';
import { ValidarFestivosComponent } from './features/componentes/validar-festivos/validar-festivos.component';

export const routes: Routes = [
    { path: "listar", component: ListarFestivosComponent },
    { path: "validar", component: ValidarFestivosComponent },
];
