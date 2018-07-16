import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { CarsListComponent } from './cars-list/cars-list.component';

const CARS_ROUTES: Route[] = [
    { path: 'cars', component: CarsListComponent }
    //{ path: 'cars/:id', component: CarsDetailList}
];

@NgModule({
    imports: [
        RouterModule.forChild(CARS_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})

export class CarsRoutingModule {}
