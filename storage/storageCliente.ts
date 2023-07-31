import { Expose} from 'class-transformer';
import { IsDefined, IsNumber} from 'class-validator';
export class storageCliente {
    @Expose({ name: 'DNI' })
    @IsDefined({message: ()=>{throw {status:422, message: "El parametro DNI es obligatorio"}}})
    @IsNumber({}, {message: ()=>{throw {status:406, message: "El formato del parametro DNI debe ser un numero"}}})
    DNI: number;

    constructor(DNI: number) {
      this. DNI =  DNI;
    }
}