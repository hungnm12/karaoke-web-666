import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'base64ToUrl'
})
export class Base64ToUrlPipe implements PipeTransform {
  transform(base64String: string | undefined): string | undefined {
    if (!base64String) {
      return undefined;
    }
    const url = `data:image/jpeg;base64,${base64String}`;
    return url;
  }
}