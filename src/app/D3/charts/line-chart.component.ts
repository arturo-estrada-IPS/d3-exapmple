import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import {
  Selection,
  select,
  scaleTime,
  scaleLinear,
  max,
  extent,
  axisBottom,
  axisLeft,
  line
} from "d3";

@Component({
  selector: "app-line-chart",
  templateUrl: "./line-chart.component.html",
  styleUrls: ["./line-chart.component.css"]
})
export class LineChartComponent implements OnInit {
  @Input() data: any;
  @ViewChild("chartArea", { static: true }) chartArea: ElementRef<any>;

  margin = { top: 10, right: 30, bottom: 30, left: 60 };
  width: number;
  height = 400 - this.margin.top - this.margin.bottom;
  svg: Selection<any, any, any, any>;
  x: any;
  y: any;

  ngOnInit(): void {
    this.setSvgArea();
    this.setAxes();
    this.displayLine();
  }

  setSvgArea(): void {
    this.width =
      this.chartArea.nativeElement.offsetWidth -
      this.margin.left -
      this.margin.right;

    this.svg = select(this.chartArea.nativeElement)
      .append("svg")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom)
      .append("g")
      .attr("transform", `translate(${this.margin.left}, ${this.margin.top})`);
  }

  setAxes(): void {
    this.x = scaleTime()
      .domain(extent(this.data, d => d.date))
      .range([0, this.width]);
    this.y = scaleLinear()
      .domain([0, max(this.data, d => d.value)])
      .range([this.height, 0]);

    this.svg
      .append("g")
      .attr("transform", `translate(0, ${this.height})`)
      .call(axisBottom(this.x));

    this.svg.append("g").call(axisLeft(this.y));
  }

  displayLine(): void {
    this.svg
      .append("path")
      .attr("class", "line")
      .datum(this.data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("strokewidth", 1.5)
      .attr(
        "d",
        line()
          .x(d => this.x(d.date))
          .y(d => this.y(d.value))
      );
  }
}
