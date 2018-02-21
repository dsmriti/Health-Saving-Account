import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewGraphPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-graph',
  templateUrl: 'view-graph.html',
})
export class ViewGraphPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewGraphPage');
  }
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  //Chart Labels
  public barChartLabels:string[] = ['2011', '2012', '2013', '2014', '2015', '2016', '2017'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  //Chart data
  public barChartData:any[] = [
    {data: [66, 55, 83, 82, 56, 51, 43], label: 'Loss'},
    {data: [29, 38, 40, 21, 82, 30, 89], label: 'Profit'}
  ];
 
  // Chart events
  public chartClicked(e:any):void {
    console.log(e);
  }

  // Chart events
  public chartHovered(e:any):void {
    console.log(e);
  }

}
