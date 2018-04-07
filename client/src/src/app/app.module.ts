import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import {ServicesModule} from './shared/services/services.module';

import { ROUTES } from './app.routes';
import {PreloadAllModules, RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './routes/pages/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UserComponent } from './routes/pages/user/user.component';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { LoginComponent } from './routes/authentification/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from './layout/header/header.component';
import {MaterialModule} from "./shared/components/material/material.module";
import {SidenavService} from "./shared/services/layout/sidenav.service";
import {GuardsModule} from "./guards/guards.module";
import {TokenInterceptor} from "./shared/services/http/TokenInterceptor";
import {AuthService} from "./shared/services/auth/auth.service";
import { ProfileComponent } from './routes/pages/profile/profile.component';
import { UnauthorizeComponent } from './routes/error/403/unauthorize.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { FooterComponent } from './layout/footer/footer.component';
import {ComponentsModule} from "./shared/components/components.module";
import {RegisterComponent} from "./routes/authentification/register/register.component";
import {FuseModule} from "../@fuse/fuse.module";
import {MailConfirmComponent} from "./routes/authentification/mail-confirm/mail-confirm.component";
import {CookieService} from "ngx-cookie-service";
import {ConfidentialiteComponent} from "./routes/pages/confidentialite/confidentialite.component";
import {ForgotPasswordComponent} from "./routes/authentification/forgot-password/forgot-password.component";

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
export function initUserFactory(authService: AuthService) {
    return () => authService.refreshUser();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    LoginComponent,
    MailConfirmComponent,
    ForgotPasswordComponent,
    HeaderComponent,
    ProfileComponent,
    UnauthorizeComponent,
    FooterComponent,
    RegisterComponent,
    ConfidentialiteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModule,
    GuardsModule,
    ServicesModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    FuseModule,
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules}),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initUserFactory,
      deps: [AuthService],
      multi: true
    },
    CookieService,

    SidenavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
