import { Injectable } from '@angular/core';
import { FakeData } from 'src/app/data/fakedata';

@Injectable({
  providedIn: 'root'
})
export class ChannelDataService {

constructor() { }
  public getChannelData(): any[][] {
    return FakeData;
  }
}
