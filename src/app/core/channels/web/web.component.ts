import { Component, OnInit, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
})
export class WebComponent implements OnInit, DoCheck {
  @Input() channelData: any[][];
  @Input() cellData: {
    row: number;
    col: number;
  };

  model: any = {};
  finalMessage: string;
  constructor() {}
  ngDoCheck(): void {
    this.model.url = this.channelData[this.cellData.row][this.cellData.col].url;

    this.model.expect = this.channelData[this.cellData.row][
      this.cellData.col
    ].expect;

    this.model.action = this.channelData[this.cellData.row][
      this.cellData.col
    ].action;

    this.model.description = this.channelData[this.cellData.row][
      this.cellData.col
    ].description;
  }

  ngOnInit() {}

  submitForm(f) {
    this.channelData[this.cellData.row][this.cellData.col].description =
      f.value.description;

    this.channelData[this.cellData.row][this.cellData.col].url = f.value.url;

    this.channelData[this.cellData.row][this.cellData.col].expect =
      f.value.expect;

    this.channelData[this.cellData.row][this.cellData.col].action =
      f.value.action;

    this.finalMessage = 'Record Updated!!!';

    setTimeout(() => {
      this.finalMessage = '';
    }, 2000);
  }
}
