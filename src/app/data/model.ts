import { SmsComponent } from '../core/channels/sms/sms.component';
import { WebComponent } from '../core/channels/web/web.component';

export interface IChannel {
  description: string;
  type: string;
}

export class UnAssignedChannel implements IChannel {
  description: string;
  type: string;
}

export class EmailChannel implements IChannel {
  description = '';
  type: 'email';
  email: '';
  subject: '';
  body: '';
}

export class SMSChannel implements IChannel {
  description: '';
  type: 'sms';
  phone: '';
  expect: '';
  reply: '';
}

export class VoiceChannel implements IChannel {
  description: '';
  type: 'voice';
  phone: '';
  expect: '';
  reply: '';
}

export class WebChannel implements IChannel {
  description: '';
  type: 'web';
  url: '';
  expect: '';
  action: '';
}

export class ChannelFactory {
  static CreateChannel(type: string): IChannel {
    if (type === 'email') {
      const email = new EmailChannel();
      email.type = 'email';
      return email;
    } else if (type === 'sms') {
      const sms = new SMSChannel();
      sms.type = 'sms';
      return sms;
    } else if (type === 'voice') {
      const voice = new VoiceChannel();
      voice.type = 'voice';
      return voice;
    } else if (type === 'web') {
      const web = new WebChannel();
      web.type = 'web';
      return web;
    }
  }
}
