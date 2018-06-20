import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MainPanelComponent} from './components/main-panel/main-panel.component';
import {SvgLayoutComponent} from './components/svg-layout/svg-layout.component';
import {LeftToolbarComponent} from './components/left-toolbar/left-toolbar.component';
import {SvgLayoutService} from "./services/svg-layout/svg-layout.service";
import {AngularFontAwesomeModule} from "angular-font-awesome";

@NgModule({
  declarations: [
    AppComponent,
    MainPanelComponent,
    SvgLayoutComponent,
    LeftToolbarComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule
  ],
  providers: [
    SvgLayoutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
