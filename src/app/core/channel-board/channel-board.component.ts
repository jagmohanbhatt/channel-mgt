import { Component, OnInit } from '@angular/core';
import { ChannelDataService } from '../service/channel-data.service';
import {
  IChannel,
  EmailChannel,
  ChannelFactory,
  UnAssignedChannel,
} from 'src/app/data/model';
import { of, concat } from 'rxjs';

@Component({
  selector: 'app-channel-board',
  templateUrl: './channel-board.component.html',
})
export class ChannelBoardComponent implements OnInit {
  channelData: any[][];
  columns: IChannel[];
  selectedCellType: string;
  selectedStep: string;
  selectedLane: string;
  constructor(private projectService: ChannelDataService) {
  }

  addLane(laneType: string) {
    const copyChannel = Array.from(this.channelData);
    for (const iterator of copyChannel) {
      const channel = ChannelFactory.CreateChannel(laneType);
      iterator.push(channel);
    }

    this.channelData = copyChannel;
    this.columns.push(ChannelFactory.CreateChannel(laneType));
  }

  receiveSelectedType($event) {
    this.selectedCellType = $event;
  }

  receiveSelectedStep($event) {
    this.selectedStep = $event;
  }

  receiveSelectedLane($event) {
    this.selectedLane = $event;
  }

  getDefaultObjectAt(array, index) {
    return (array[index] = array[index] || {});
  }

  addStep() {
    const copy = Array.from(this.columns);
    const col: UnAssignedChannel[] = [];
    for (const c of copy) {
      col.push(ChannelFactory.CreateChannel(c.type));
    }
    this.channelData.push(col);
  }

  ngOnInit() {
    this.channelData = this.projectService.getChannelData();
    this.columns = [...this.channelData[0]];
  }
}
