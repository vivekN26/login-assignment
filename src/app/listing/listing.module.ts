import { NgModule } from "@angular/core";
import { ListingComponent } from "./listing.component";
import { ListService } from "./listing.service";
import { ListingRoutingModule } from "./listing-routing.module";
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { MaterialModule } from "../shared/material/material.module";
import { ListTableComponent } from "../shared/list-table/list-table.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [ListingComponent],
    imports:[
        CommonModule,
        ListingRoutingModule,
        NavbarComponent,
        MaterialModule,
        ListTableComponent
    ],
    providers: [ListService]
})

export class ListingModule {}