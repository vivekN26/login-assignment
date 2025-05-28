import { RouterModule, Routes } from "@angular/router";
import { ListingComponent } from "./listing.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: '',
        component: ListingComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})


export class ListingRoutingModule {}