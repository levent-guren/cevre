import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordValidator(uzunluk: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const val: string = control.value;
        if (val.length < uzunluk) {
            return { "hata": `En az ${uzunluk} karakter olmalıdır` };
        } else if (val.charAt(0) == '0') {
            return { "hata": "0 ile başlayamaz" };
        }
        return null;
    };
}