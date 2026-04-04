import { AbstractControl, ValidatorFn } from "@angular/forms";

export function yeniSifreValidator(): ValidatorFn {
    return (control: AbstractControl) => {
        const val1 = control.get('sifre')!.value;
        const val2 = control.get('yeniSifre')!.value;
        if (val1 == '' && val2 == '') {
            return null;
        }
        if (val1 != val2) {
            return { hata: 'İki değer eşit değil' };
        }
        return null;
    };
}