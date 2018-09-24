import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MainPanelComponent} from './components/main-panel/main-panel.component';
import {SvgLayoutComponent} from './components/svg-layout/svg-layout.component';
import {LeftToolbarComponent} from './components/left-toolbar/left-toolbar.component';
import {SvgLayoutService} from "./services/svg-layout/svg-layout.service";
import {AngularFontAwesomeModule} from "angular-font-awesome";
import {LeftToolbarDrawOptionsComponent} from './components/left-toolbar-draw-options/left-toolbar-draw-options.component';
import {ColorPickerModule} from "ngx-color-picker";
import {ImgSaverComponent} from './components/img-saver/img-saver.component';
import {DomService} from "./services/dom/dom.service";
import {ColorPaletteComponent} from './components/color-palette/color-palette.component';
import {ByParamsComponent} from './components/by-params/by-params.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPanelComponent,
    SvgLayoutComponent,
    LeftToolbarComponent,
    LeftToolbarDrawOptionsComponent,
    ImgSaverComponent,
    ColorPaletteComponent,
    ByParamsComponent
  ],
  entryComponents: [
    ImgSaverComponent,
    ColorPaletteComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    ColorPickerModule
  ],
  providers: [
    SvgLayoutService,
    DomService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
