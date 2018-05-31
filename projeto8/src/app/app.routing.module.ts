import { NgModule } from "@angular/core";
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosModule } from "./cursos/cursos.module";
import { AuthGuard } from "./guards/auth.guard";
import { CursosGuard } from "./guards/cursos.guard";
import { PaginaNaoEncontradaComponent } from "./pagina-nao-encontrada/pagina-nao-encontrada.component";
//import { AlunosGuard } from "./guards/alunos.guard";

const appRoutes: Routes = [
    { path: 'cursos', 
      loadChildren: './cursos/cursos.module#CursosModule',
      canActivate : [AuthGuard], 
      canActivateChild: [CursosGuard]
    },
    { path: 'alunos', 
      loadChildren: './alunos/alunos.module#AlunosModule',
      canActivate : [AuthGuard],
      canLoad: [AuthGuard]
    },
    { path: 'home',
      component: HomeComponent,
      canActivate : [AuthGuard] 
    },
    { path: 'login', 
      component: LoginComponent 
    },
    {path: '',
     redirectTo: '/home',
     pathMatch: 'full'
    },
    {
      path: '**',
      component: PaginaNaoEncontradaComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}