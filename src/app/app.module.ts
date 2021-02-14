import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { D3VisualizationModule } from "./D3/d3-visualization.module";

@NgModule({
  imports: [BrowserModule, FormsModule, D3VisualizationModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
