import { BuiltinMethod } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NodeComponent } from '../node/node.component';
@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  grid = [];
  xSize = 27;
  ySize = 48;
  SelectingStart = false;
  SelectingEnd = false;
  startNode = {
    x: 0,
    y: 0
  }
  endNode = {
    x: 0,
    y: 0
  }
  yellow = "#D79922"
  beige = "#EFE2BA"
  red = "#F13c20"
  grey = "#C5CBE3"
  blue = "#4056A1";
  map = Array.from({ length: this.xSize }, (_, colIndex) => (
    Array.from({ length: this.ySize }, (_, rowIndex) => (
      {
        xIdx: rowIndex,
        yIdx: colIndex,
        color: this.blue,
        isVisited: false,
        isStart: false,
        isEnd: false
      }
    ))
  ))
  constructor() {
    console.log(this.map[3][1]);

  }

  ngOnInit(): void {

  }
  SelectStart() {
    console.log("start is being selected")
    this.SelectingEnd = false;
    this.SelectingStart = true;
  }
  SelectEnd() {
    this.SelectingStart = false;
    console.log("end is being selected")
    this.SelectingEnd = true;
  }
  OnClick(xIdx, yIdx, color, isVisited, isStart, isEnd) {
    if (this.SelectingStart == true) {
      this.map[yIdx][xIdx].isStart = true;
      this.map[yIdx][xIdx].color = this.yellow;
      this.SelectingStart = false;
    }
    if (this.SelectingEnd == true) {
      this.map[yIdx][xIdx].isEnd = true;
      this.map[yIdx][xIdx].color = this.red;
      this.SelectingEnd = false;
    }


  }
}
