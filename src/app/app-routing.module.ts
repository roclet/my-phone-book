import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './blocks/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {
          isLogin: false
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule],
    providers: [],
})
export class AppRoutingModule {}