var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from 'class-transformer';
export class storageAlquileres {
    constructor(ID_Alquiler, DNI) {
        this.ID_Alquiler = ID_Alquiler;
        this.DNI = DNI;
    }
}
__decorate([
    Expose({ name: 'ID-Alquiler' }),
    Transform(({ value }) => { if (/^[0-9]|undefined+$/.test(value))
        return (value);
    else
        throw { status: 422, message: "El formato del parametro ID-Alquiler debe ser un numero." }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], storageAlquileres.prototype, "ID_Alquiler", void 0);
__decorate([
    Expose({ name: 'DNI' }),
    Transform(({ value }) => { if (/^[0-9]|undefined+$/.test(value))
        return (value);
    else
        throw { status: 422, message: "El formato del parametro DNI debe ser un numero." }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], storageAlquileres.prototype, "DNI", void 0);
