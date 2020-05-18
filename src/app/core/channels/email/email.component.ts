import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  DoCheck,
} from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
})
export class EmailComponent implements OnInit, DoCheck {
  @Output() updateEvent = new EventEmitter<{}>();
  @Input() channelData: any[][];
  @Input() cellData: {
    row: number;
    col: number;
  };
  finalMessage: string;

  model: any = {};
  constructor() {}

  ngOnInit() {}

  ngDoCheck() {
    this.model.email = this.channelData[this.cellData.row][
      this.cellData.col
    ].email;
    this.model.subject = this.channelData[this.cellData.row][
      this.cellData.col
    ].subject;
    this.model.body = this.channelData[this.cellData.row][
      this.cellData.col
    ].body;
    this.model.description = this.channelData[this.cellData.row][
      this.cellData.col
    ].description;
  }

  submitForm(f) {
    this.channelData[this.cellData.row][this.cellData.col].description =
      f.value.description;

    this.channelData[this.cellData.row][this.cellData.col].email =
      f.value.email;

    this.channelData[this.cellData.row][this.cellData.col].body = f.value.body;

    this.channelData[this.cellData.row][this.cellData.col].subject =
      f.value.subject;

    this.finalMessage = 'Record Updated!!!';

    setTimeout(() => {
      this.finalMessage = '';
    }, 2000);
  }
}
