import { Component, OnInit } from '@angular/core';
import studentData from 'src/assets/StudentsMarks.json'

@Component({
  selector: 'app-student-marks',
  templateUrl: './student-marks.component.html',
  styleUrls: ['./student-marks.component.css']
})

export class StudentMarksComponent implements OnInit {

  data = studentData;
  tableHeaders: string[] = [];
  studentData: any;
  clickedTimes = {};
  booleanValue: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.studentData = [...this.data.studentData];
    console.log("Data from JSON ", this.studentData);
    if(this.studentData ){
      this.tableHeaders = Object.keys(this.studentData[0]);
      console.log("Table Headers ", this.tableHeaders);
      
    }
  }

  // sortFunction(colName, boolean) {
  //   if (boolean == true){
  //       this.studentData.sort((a, b) => a[colName] < b[colName] ? 1 : a[colName] > b[colName] ? -1 : 0)
  //       this.booleanValue = !this.booleanValue
  //   }
  //   else{
  //       this.studentData.sort((a, b) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0)
  //       this.booleanValue = !this.booleanValue
  //   }
  // }

  sortFunction(colName) {
    
    if(!this.clickedTimes[colName] || (this.clickedTimes[colName]===0)){
        this.studentData.sort((a, b) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0);
        this.clickedTimes[colName] = this.clickedTimes[colName] ? this.clickedTimes[colName] + 1 : 1;
    }
    else if (this.clickedTimes[colName]===1){
      this.studentData.sort((a, b) => a[colName] < b[colName] ? 1 : a[colName] > b[colName] ? -1 : 0);
      this.clickedTimes[colName] += 1;
    }
    else if (this.clickedTimes[colName]===2){
      this.studentData = [...this.data.studentData];
      this.clickedTimes[colName] = 0;
    }

    Object.keys(this.clickedTimes).forEach(key => {
      if(key !== colName){
        this.clickedTimes[key] = 0;
      }
    });
  }
}
