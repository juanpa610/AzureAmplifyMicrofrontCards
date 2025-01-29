import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'maskCardNumber'
})
export class MaskCardPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const suffix = value.substring(value.length - 4);
    // const prefix = value.substring(0, value.length - 4).replace(/\s/g, '');
    const prefix = value.substring(0, value.length - 4);
    const maskedPrefix = prefix.replace(/[0-9]/g, '•');

    const formattedPrefix = maskedPrefix.replace(/(.{4})/g, '$1 ').trim();
    console.log(`${formattedPrefix} ${suffix}`);
    return `${formattedPrefix} ${suffix}`;
  }

}