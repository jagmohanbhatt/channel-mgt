import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomeComponent } from './core/home/home.component';
import { SmsComponent } from './core/channels/sms/sms.component';
import { WebComponent } from './core/channels/web/web.component';
import { EmailComponent } from './core/channels/email/email.component';
import { VoiceComponent } from './core/channels/voice/voice.component';
import { NavComponent } from './core/home/nav/nav.component';
import { ChannelBoardComponent } from './core/channel-board/channel-board.component';
import { TableBuilderComponent } from './shared/table-builder/table-builder.component';
import { FormatCellPipe } from './shared/format-cell.pipe';
import { CurrencyPipe } from '@angular/common';
import { ChannelDataService } from './core/service/channel-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SmsComponent,
    WebComponent,
    VoiceComponent,
    EmailComponent,
    NavComponent,
    ChannelBoardComponent,
    TableBuilderComponent,
    FormatCellPipe
  ],
  imports: [
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ChannelDataService,
    FormatCellPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
