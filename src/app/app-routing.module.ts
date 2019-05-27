import { NgModule } from '@angular/core';
import  { RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { BrandComponent } from './pages/brand/brand.component';

const app_routes: Routes = [
    { path: "", component: IndexComponent },
    { path: "brand", component: BrandComponent },
    { path: "**", pathMatch: "full", redirectTo: "" } 
    // { path: "stores" , component:  },
    // { path: "lookbook" , component:  },
    // { path: "product" , component:  },
    // { path: "register" , component:  }
]

@NgModule({
    imports: [
        RouterModule.forRoot( app_routes )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{

}