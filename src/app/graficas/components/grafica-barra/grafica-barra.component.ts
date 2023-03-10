import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() horizontal: boolean = false;
  @Input() barChartData!: ChartData<'bar'>;

  constructor() { }

  ngOnInit(): void {
    if (this.horizontal) {
      //Esto muestra la gráfica en sentido horizontal y todos los datos en ese sentido.
      this.barChartOptions!.indexAxis = 'y';
      // this.barChartOptions!.scales!["y"]!.min = 0;
    }
  }

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,

  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];


//   public randomize(): void {
//     // Only Change 3 values
//     this.barChartData.datasets[0].data = [
//         Math.round(Math.random() * 100),
//         Math.round(Math.random() * 100),
//         Math.round(Math.random() * 100),
//         Math.round(Math.random() * 100),
//         Math.round(Math.random() * 100),
//         Math.round(Math.random() * 100),
//         Math.round(Math.random() * 100)];
//     this.barChartData.datasets[1].data = [
//         Math.round(Math.random() * 100),
//         Math.round(Math.random() * 100),
//         Math.round(Math.random() * 100),
//         Math.round(Math.random() * 100),
//         Math.round(Math.random() * 100),
//         Math.round(Math.random() * 100),
//         Math.round(Math.random() * 100)
//     ];
//     this.barChartData.datasets[2].data = [
//         Math.round(Math.random() * 100),
//         Math.round(Math.random() * 100),
//         Math.round(Math.random() * 100),
//         Math.round(Math.random() * 100),
//         Math.round(Math.random() * 100),
//         Math.round(Math.random() * 100),
//         Math.round(Math.random() * 100)
//     ];

//     this.chart?.update();
// }


}
