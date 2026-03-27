import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emoji',
})
export class EmojiPipe implements PipeTransform {
  transform( hello : string, ...args: any[]): string {
    return hello+ "✅" ;
  }
}
