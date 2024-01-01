import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'linkify' })
export class LinkifyPipe implements PipeTransform {
  transform(value: string) {
    return value.trim().replace(' ', '-').toLowerCase();
  }
}
