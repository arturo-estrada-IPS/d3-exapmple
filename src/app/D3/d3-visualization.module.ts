import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LineChartComponent } from "./charts/line-chart.component";
import { D3VisualizationService } from "../D3/d3-visualization.service";
import { D3VisualizationComponent } from "./d3-visualization.component";

@NgModule({
  imports: [CommonModule],
  declarations: [D3VisualizationComponent, LineChartComponent],
  exports: [D3VisualizationComponent],
  providers: [D3VisualizationService]
})
export class D3VisualizationModule {}
