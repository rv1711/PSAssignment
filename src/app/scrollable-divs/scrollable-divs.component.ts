import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrollable-divs',
  templateUrl: './scrollable-divs.component.html',
  styleUrls: ['./scrollable-divs.component.css']
})
export class ScrollableDivsComponent implements OnInit {

  divs: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  addDivs(){
    this.divs.push(this.divs.length);
  } 
  showAlert(i){
    window.alert("Div "+(+i+1)+" is clicked");
  }
  @HostListener("window:scroll", ['$event']) scrollEvent(event){
    // if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
    //   console.log("End");
    // }
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.clientHeight;
    const max = document.documentElement.scrollHeight;
    const fixedPos = pos + 10;
    //console.log(max, pos);
    // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
    if ((pos >= max)) {
      console.log("Scrolled ");
      if(this.divs.length<30){
        this.addDivs();
      }
    }

  }
}
