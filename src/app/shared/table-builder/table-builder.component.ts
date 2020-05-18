import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  HostListener,
  EventEmitter,
  Output,
} from '@angular/core';
import { UnAssignedChannel, ChannelFactory } from 'src/app/data/model';

@Component({
  selector: 'app-table-builder',
  templateUrl: './table-builder.component.html',
})
export class TableBuilderComponent implements OnInit, DoCheck {
  @Input() records: any[][];

  selectedCellType = 'email';
  @Output() selectedCellEvent = new EventEmitter<string>();
  @Output() stepSelectedEvent = new EventEmitter<string>();
  @Output() laneSelectedEvent = new EventEmitter<string>();

  selectedRow: number;
  selectedColumn: number;
  columnMaps: any[];
  constructor() {}

  setClickedRow(irow, icol) {
    this.selectedRow = irow;
    this.selectedColumn = icol;
    this.sendMessage();
  }

  sendMessage() {
    this.selectedCellEvent.emit(this.getActiveCell());
    this.stepSelectedEvent.emit(this.selectedRow.toString());
    this.laneSelectedEvent.emit(this.selectedColumn.toString());
  }

  isActive(iRow, iCol) {
    return iRow === this.selectedRow && iCol === this.selectedColumn;
  }

  getActiveCell() {
    return this.records[this.selectedRow][this.selectedColumn].type;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (!event.target.toString().includes('BodyElement')){
      return;
    }
    if (this.selectedRow === undefined) {
      return;
    }
    if (this.selectedColumn === undefined) {
      return;
    }
    if (event.key === 'ArrowRight') {
      if (this.selectedColumn === this.columnMaps.length - 1) {
        if (this.selectedRow === this.records.length - 1) {
          this.addStep();
        }
        this.selectedRow++;
        this.selectedColumn = 0;
      } else {
        this.selectedColumn++;
      }
    } else if (event.key === 'ArrowLeft') {
      if (this.selectedColumn === 0) {
        if (this.selectedRow <= 0) {
          return;
        }
        this.selectedRow--;
        this.selectedColumn = this.columnMaps.length - 1;
      } else {
        this.selectedColumn--;
      }
    } else if (event.key === 'ArrowDown') {
      if (this.selectedRow === this.records.length - 1) {
        return;
      }
      this.selectedRow++;
    } else if (event.key === 'ArrowUp') {
      if (this.selectedRow === 0) {
        return;
      }
      this.selectedRow--;
    }
    this.setClickedRow(this.selectedRow, this.selectedColumn);
  }

  addStep() {
    const copy = Array.from(this.columnMaps);
    const col: UnAssignedChannel[] = [];
    for (const c of copy) {
      col.push(ChannelFactory.CreateChannel(c.type));
    }
    this.records.push(col);
  }

  ngOnInit() {}

  ngDoCheck() {
    this.columnMaps = this.records[0];
  }
}
