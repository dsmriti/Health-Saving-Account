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
    let m:any;
    console.log('ionViewDidLoad TestingPage');
    m=this.XLStoJSON("Tax_Brackets");
    m.then(function(mydata){
      alert("success");
      console.log("done",mydata);
    })
    m.catch(function(mydata){
      alert("error");
      console.log("error",mydata);
    })
  }


  public XLStoJSON(used_sheet_name) {
    return new Promise((resolve, reject) => {
      var url = 'assets/hsa.xlsx';
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

          // for (var j=0; j< workbook.SheetNames.length; j++) {
          //   var current_sheet_name = workbook.SheetNames[j];
          //   var current_sheet = workbook.Sheets[current_sheet_name];
          //   var current_json = XLSX.utils.sheet_to_json(current_sheet, {raw: true});
          //   console.log(current_sheet_name);
          //   console.log(current_json);
          // }
          // var worksheetname = workbook.SheetNames[0];
          var worksheet = workbook.Sheets[used_sheet_name];
          var json = XLSX.utils.sheet_to_json(worksheet, {raw: true});
          this.arrangeData(json);
          resolve('Finished generating JSON');
        } else {
          reject('XMLHttpRequest failed; error code:' + oReq.statusText);
        }
      }
      oReq.send();
    });
  }

  public arrangeData(jsonData) {
    console.log(jsonData);
    var temparray = [];

    var keys = Object.keys(jsonData[0]);
    console.log(keys);
    temparray.push(keys);
    for (var i = 0; i != jsonData.length; ++i) {
      var currentarray = [];

      // currentarray.push(jsonData[i]["Parameter"]);
      // currentarray.push(jsonData[i]["Content"]);
      // currentarray.push(jsonData[i]["Valid Values/ Notes"]);
      for (var j =0 ; j < keys.length; j++) {
        currentarray.push(jsonData[i][keys[j]]);
      }
      temparray.push(currentarray)
    }

    this.page_data = temparray;
  }
}
