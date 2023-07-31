import { Expose} from 'class-transformer';
import { IsDefined, IsNumber} from 'class-validator';
export class storageAlquileres {
    @Expose({ name: 'ID-Alquiler' })
    @IsDefined({message: ()=>{throw {status:422, message: "El parametro ID-Alquiler es obligatorio"}}})
    @IsNumber({}, {message: ()=>{throw {status:406, message: "El formato del parametro ID-Alquiler debe ser un numero"}}})
    ID_Alquiler: number;

    constructor( ID_Alquiler: number) {
      this. ID_Alquiler =  ID_Alquiler;
    }
}