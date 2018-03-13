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
    let m, n, k:any;
    //console.log('ionViewDidLoad TestingPage');
    m = this.XLStoJSON("Tiers_SeedMoney_Limits");
    n = this.XLStoJSON("Globals");
    k = this.XLStoJSON("Tax_Brackets");

    m.then(function(mydata){
      //alert("success");
      //console.log("done",mydata);
    })
    m.catch(function(mydata){
      //alert("error");
     // console.log("error",mydata);
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

         var worksheet = workbook.Sheets[used_sheet_name];
          var json = XLSX.utils.sheet_to_json(worksheet, {raw: true});
          this.arrangeData(json, used_sheet_name);

          resolve('Finished generating JSON');
        } else {
          reject('XMLHttpRequest failed; error code:' + oReq.statusText);
        }
      }
      oReq.send();
    });
  }

  public arrangeData(jsonData, used_sheet_name) {
    //console.log(jsonData);
    localStorage.setItem(used_sheet_name, JSON.stringify(jsonData));
    var temparray = [];

    var keys = Object.keys(jsonData[0]);
   // console.log(keys);
    temparray.push(keys);
    for (var i = 0; i != jsonData.length; ++i) {
      var currentarray = [];
      for (var j =0 ; j < keys.length; j++) {
        currentarray.push(jsonData[i][keys[j]]);
      }
      temparray.push(currentarray)
    }

    this.page_data = temparray;
    
  }
}