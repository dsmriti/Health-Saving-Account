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
    //console.log('ionViewDidLoad TestingPage');
    m=this.XLStoJSON("Tiers_SeedMoney_Limits");
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

          //var first_sheet_name = workbook.SheetNames[0];

          var yourCoverageType = 1;
          var yourAge = 0;
          
          if((yourCoverageType == 1) && (yourAge == 1)){
              var companyContri = "B2";
              var irsLimit = "C2";
              var irsCatchup = "D2";

              var companyContri_cell = worksheet[companyContri];
              var companyContri_value = (companyContri_cell ? companyContri_cell.v : undefined);
              console.log("Your Company Contribution:" + companyContri_value);

              var irsLimit_cell = worksheet[irsLimit];
              var irsLimit_value = (irsLimit_cell ? irsLimit_cell.v : undefined);
              console.log("Your IRS Limit:" + irsLimit_value);

              var irsCatchup_cell = worksheet[irsCatchup];
              var irsCatchup_value = (irsCatchup_cell ? irsCatchup_cell.v : undefined);
              console.log("Your IRS Catchup:" + irsCatchup_value);
          }else if((yourCoverageType == 1) && (yourAge == 0)){
            var companyContri = "B2";
            var irsLimit = "C2";
            var irsCatchup = "0";

            var companyContri_cell = worksheet[companyContri];
            var companyContri_value = (companyContri_cell ? companyContri_cell.v : undefined);
            console.log("Your Company Contribution:" + companyContri_value);

            var irsLimit_cell = worksheet[irsLimit];
            var irsLimit_value = (irsLimit_cell ? irsLimit_cell.v : undefined);
            console.log("Your IRS Limit:" + irsLimit_value);

            
            console.log("Your IRS Catchup:" + irsCatchup);
        }else if((yourCoverageType == 2) && (yourAge == 1)){
          var companyContri = "B3";
          var irsLimit = "C3";
          var irsCatchup = "D3";

          var companyContri_cell = worksheet[companyContri];
          var companyContri_value = (companyContri_cell ? companyContri_cell.v : undefined);
          console.log("Your Company Contribution:" + companyContri_value);

          var irsLimit_cell = worksheet[irsLimit];
          var irsLimit_value = (irsLimit_cell ? irsLimit_cell.v : undefined);
          console.log("Your IRS Limit:" + irsLimit_value);

          var irsCatchup_cell = worksheet[irsCatchup];
          var irsCatchup_value = (irsCatchup_cell ? irsCatchup_cell.v : undefined);
          console.log("Your IRS Catchup:" + irsCatchup_value);
      }
          //var address_of_cell = 'B5';
          
          /* Find desired cell */
         


          resolve('Finished generating JSON');
        } else {
          reject('XMLHttpRequest failed; error code:' + oReq.statusText);
        }
      }
      oReq.send();
    });
  }

  public arrangeData(jsonData) {
   // console.log(jsonData);
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