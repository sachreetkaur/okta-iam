import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { OktaAuthModule, OKTA_CONFIG } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

const oktaAuth = new OktaAuth({
  issuer: 'https://${yourOktaDomain}/oauth2/default',
  clientId: '${yourClientID}',
  redirectUri: window.location.origin + '/login/callback'
});

@NgModule({
  imports:      [ BrowserModule,OktaAuthModule.forRoot({ oktaAuth }) ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
 
 }