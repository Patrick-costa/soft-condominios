import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from './share/material-design/material-design.module';
import { HeadersInterceptor, HeadersInterceptorProvider } from './core/interceptors/headers.interceptor';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrMaskerModule,
    BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, MaterialDesignModule,
    BrowserAnimationsModule,],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, HeadersInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
