import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { ButtonModule } from "primeng/button";
import { SplitterModule } from "primeng/splitter";
import { PanelMenuModule } from 'primeng/panelmenu';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SplitterModule,
    ButtonModule,
    PanelMenuModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
