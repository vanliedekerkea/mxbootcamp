import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {EnvironmentConfig} from './env-config';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppComponent} from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    EnvironmentConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: (config: EnvironmentConfig) => () => config.load(),
      deps: [EnvironmentConfig],
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
