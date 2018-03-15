import * as XLSX from "xlsx";
import { Injectable } from '@angular/core';

@Injectable()
export class SharedataProvider {

  json: any[] = [];
  constructor() {
    this.XLStoJSON();
  }
 //json created for Tiers_SeedMoney_Limits sheet
  getCoverageData() {
    var data = {
      "under_50": {},
      "above_50": {}
    };
    var selected_data = this.json[2];
    console.log(selected_data);
    var category_index = "input_covtierSQL";
    for (var i=0; i<selected_data.length; i++) {
      data["under_50"][selected_data[i][category_index]] = [
        selected_data[i]["input_cocontribSQL"], selected_data[i]["input_IRSreglimitSQL"]
      ];
      data["above_50"][selected_data[i][category_index]] = [
        selected_data[i]["input_cocontribSQL"], selected_data[i]["input_IRSreglimitSQL"],
        selected_data[i]["input_IRScatchupSQL"]
      ]
    }

    return data;

  }

  //json created for fetching the tax rate from Tax_Brackets sheet
  gettaxrate() {
    var data = {};
    var selected_data = this.json[1];
    for (var key in selected_data) {
      var selected_entry = selected_data[key];
      for (var subkey in selected_entry) {
        if(subkey != "Tax Rate") {
          if (data[subkey] == undefined) data[subkey] = {};
          data[subkey][selected_entry[subkey]] = selected_entry["Tax Rate"];
        }
      }
    }

    return data;
    // for (var i=0; i < selected_data.length-1; i++) {
    //   console.log(selected_data[i]);
    //   data[selected_data[i]] = {};
    //
    //   for (var j=0; j < 7; j++) {
    //     data[selected_data[i]][selected_data[i][j]] = selected_data[selected_data.length-1];
    //   }
    // }

    // return selected_data;
  }

  XLStoJSON() {
    // Fills all the sheet in this.json as soon as ShareDataProvider is called.
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
          for(var j= 0; j < workbook.SheetNames.length; j++) {
            var worksheetname = workbook.SheetNames[j];
            var worksheet = workbook.Sheets[worksheetname];
            this.json.push(XLSX.utils.sheet_to_json(worksheet, {raw: true}));
          }
          console.log(this.json);
          resolve('Finished generating JSON');
        } else {
          reject('XMLHttpRequest failed; error code:' + oReq.statusText);
        }
      };
      oReq.send();
    });
  }
}
