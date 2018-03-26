import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

@IonicPage()
@Component({
  selector: 'page-view-graph',
  templateUrl: 'view-graph.html',
})
export class ViewGraphPage {
  

  result:any;
  years:  string[] = [];
  hsaBalnc: string[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  public my(){
    let num = 0;
    while (num <= 49&&this.result.output_growtharray[num]!='') {
      this.years.push(num+" Years");
      this.hsaBalnc.push(this.result.output_growtharray[num]);
      num++;
      }
  }

  @ViewChild('lineCanvas') lineCanvas;
  lineChart: any;
  ionViewDidLoad() {
   
    
    this.result = this.navParams.get('data');
    console.log(this.hsaBalnc);
    console.log(this.years);
    this.my();
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
    type: 'line',
      data: {
        labels:this.years,
        datasets: [
          {
            label: "HSA",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.hsaBalnc,
            spanGaps: false,
          }
        ]
      }

    });


  }


}
