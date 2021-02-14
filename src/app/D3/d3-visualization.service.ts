import { Inject } from "@angular/core";
import { from, Observable } from "rxjs";
import { csv, timeParse } from "d3";
import { map } from "rxjs/operators";

@Inject({})
export class D3VisualizationService {
  private dataUrl =
    "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv";

  fetchData(): Observable<{ date: Date; value: number }[]> {
    const parseTime = timeParse("%Y-%m-%d");
    return from(csv(this.dataUrl)).pipe(
      map((res: any[]) =>
        res.map(d => ({
          ...d,
          date: parseTime(d.date),
          value: +d.value
        }))
      )
    );
  }
}
