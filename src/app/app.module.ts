import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { UserComponent } from './component/user/user.component';
import { HeaderComponent } from './component/header/header.component';
import { BannerComponent } from './component/banner/banner.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { FormsModule } from '@angular/forms';
import { PbbComponent } from './component/pbb/pbb.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoComponent } from './component/todo/todo.component';
import { MenuComponent } from './component/menu/menu.component';
import { CounterComponent } from './components/counter/counter.component';
import { AntrianComponent } from './components/antrian/antrian.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, ServerComponent, UserComponent, HeaderComponent, BannerComponent, GalleryComponent, PbbComponent, TodoComponent, MenuComponent, CounterComponent, AntrianComponent, CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
