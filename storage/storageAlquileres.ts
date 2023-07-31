import { Expose, Transform} from 'class-transformer';
export class storageAlquileres {
    @Expose({ name: 'ID-Alquiler' })
    @Transform(({ value }) => { if(/^[0-9]|undefined+$/.test(value)) return (value); else throw {status: 422, message: "El formato del parametro ID-Alquiler debe ser un numero."};}, { toClassOnly: true })

    ID_Alquiler: number;

    @Expose({ name: 'DNI' })
    @Transform(({ value }) => { if(/^[0-9]|undefined+$/.test(value)) return (value); else throw {status: 422, message: "El formato del parametro DNI debe ser un numero."};}, { toClassOnly: true })
    DNI: number;

    constructor( ID_Alquiler: number, DNI: number) {
      this. ID_Alquiler =  ID_Alquiler;
      this. DNI =  DNI;
    }
}