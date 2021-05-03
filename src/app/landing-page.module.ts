import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./landing-page.component";
import { LandingSvgComponent } from "./landing-svg.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, LandingSvgComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
