import { Component, OnInit, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
})
export class SmsComponent implements OnInit, DoCheck {
  @Input() channelData: any[][];
  @Input() cellData: {
    row: number;
    col: number;
  };

  model: any = {};
  finalMessage: string;
  constructor() {}
  ngDoCheck(): void {
    this.model.description = this.channelData[this.cellData.row][
      this.cellData.col
    ].description;
    this.model.phone = this.channelData[this.cellData.row][
      this.cellData.col
    ].phone;
    this.model.expect = this.channelData[this.cellData.row][
      this.cellData.col
    ].expect;
    this.model.reply = this.channelData[this.cellData.row][
      this.cellData.col
    ].reply;
  }

  ngOnInit() {}

  submitForm(f) {
    this.channelData[this.cellData.row][this.cellData.col].description =
      f.value.description;

    this.channelData[this.cellData.row][this.cellData.col].phone =
      f.value.phone;

    this.channelData[this.cellData.row][this.cellData.col].expect =
      f.value.expect;

    this.channelData[this.cellData.row][this.cellData.col].reply =
      f.value.reply;

    this.finalMessage = 'Record Updated!!!';

    setTimeout(() => {
      this.finalMessage = '';
    }, 2000);
  }
}
