import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { compileNgModuleFromRender2 } from '@angular/compiler/src/render3/r3_module_compiler';

import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddUserComponent,
    EditUserComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    OrderModule,
    Ng2SearchPipeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
