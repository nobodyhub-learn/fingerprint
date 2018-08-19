import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";


export interface DialogData {
  info: EmployeeInfo;
  chart: ChatData;
}

export interface ChatData {
  data: Array<any>;
  labels: string[];
}

export interface EmployeeInfo {
  name: string;
  team: string;
  email: string;
}

@Component({
  selector: 'app-detail-dialog',
  templateUrl: './detail-dialog.component.html',
  styleUrls: ['./detail-dialog.component.css']
})
export class DetailDialogComponent implements OnInit {

  lineChartOptions: any = {
    responsive: true
  };

  lineChartColors: Array<any> = [
    { // blue, for main
      pointRadius: 2,
      borderWidth: 3,
      lineTension: 0,
      fill: false,
      backgroundColor: 'rgba(0, 153, 255,1)',
      borderColor: 'rgba(0, 153, 255,1)',
      pointBackgroundColor: 'rgba(0, 153, 255,1)',
      pointBorderColor: 'rgba(0, 153, 255,1)',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // yellow, for avg-5
      fill: false,
      borderWidth: 1,
      pointRadius: 0,
      borderColor: 'rgba(255, 204, 0,1)',
      backgroundColor: 'rgba(255, 204, 0,1)',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // purple, for avg-10
      fill: false,
      borderWidth: 1,
      pointRadius: 0,
      borderColor: 'rgba(204, 51, 255,1)',
      backgroundColor: 'rgba(204, 51, 255,1)',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  constructor(public dialogRef: MatDialogRef<DetailDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  ngOnInit() {
  }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
