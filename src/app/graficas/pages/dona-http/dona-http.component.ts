import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {


  // public doughnutChartLabels: Label[] = [
  //   'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other'
  // ];
  // public doughnutChartData: MultiDataSet = [
  //   [350, 450, 100, 150]
  // ];

  // Doughnut
  public doughnutChartLabels: string[] = [
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
  ];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [
          // 350, 450, 100
        ],
      },
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {
    // this.graficasService.getUsuariosRedesSociales()
    //   .subscribe((data) => {
    //     console.log(data);
    //     this.doughnutChartData = {
    //       labels: Object.keys(data),
    //       datasets: [{ data: Object.values(data) }],
    //     };

    //   });

    this.graficasService
      .getUsuariosRedesSocialesDonaData()
      .subscribe(({ labels, datasets }) => {
        // console.log(data);
        this.doughnutChartData = { labels, datasets };
      });

  }


}
