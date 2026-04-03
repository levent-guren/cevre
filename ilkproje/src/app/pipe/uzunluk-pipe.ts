import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uzunluk',
})
export class UzunlukPipe implements PipeTransform {
  transform(value: string, maxUzunluk: number): string {
    if (!value) return value;
    if (value.length <= maxUzunluk) return value;
    // value="abdulmuttalip"
    // maxUzunluk = 7
    // dönmesini istediğimiz değer: abdu...
    return value.slice(0, maxUzunluk - 3) + '...';
  }
}
