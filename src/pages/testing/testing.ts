import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as XLSX from 'xlsx';
import { File } from '@ionic-native/file';

@Component({
  selector: 'page-testing',
  templateUrl: 'testing.html',
})
export class TestingPage {
  page_data: any[][] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public file: File) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestingPage');
    this.XLStoJSON();
  }


  public XLStoJSON() {
    return new Promise((resolve, reject) => {
      var url = 'http://localhost:8100/src/hsa.xlsx';
      var oReq = new XMLHttpRequest();
      var workbook: any;
      oReq.open("GET", url, true);
      oReq.responseType = "arraybuffer";
      oReq.onload = (e) => {
        if (oReq.status >= 200 && oReq.status < 300) {
          var arraybuffer = oReq.response;
          var data = new Uint8Array(arraybuffer);
          var arr = new Array();
          for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
          var bstr = arr.join("");
          workbook = XLSX.read(bstr, {type: "binary"});
          var worksheetname = workbook.SheetNames[0];
          var worksheet = workbook.Sheets[worksheetname];
          var json = XLSX.utils.sheet_to_json(worksheet, {raw: true});
          this.arrangeData(json);
          resolve('Finished generating JSON');
        } else {
          reject(console.log('XMLHttpRequest failed; error code:' + oReq.statusText));
        }
      }
      oReq.send();
    });
  }

  public arrangeData(jsonData) {
    console.log(jsonData);
    var temparray = [];

    for (var i = 0; i != jsonData.length; ++i) {
      var currentarray = [];
      currentarray.push(jsonData[i]["Parameter"]);
      currentarray.push(jsonData[i]["Content"]);
      currentarray.push(jsonData[i]["Valid Values / Notes"]);
      temparray.push(currentarray)
    }

    this.page_data = temparray;
  }
}
