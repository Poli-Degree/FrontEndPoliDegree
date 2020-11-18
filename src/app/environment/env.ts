import { Proyect } from '../models/proyect.model';
import { Usuario } from '../models/user.model';


export const environment = {
    apiUrl: 'https://polidegree.herokuapp.com/',
    User: new Usuario,
    Proyects: Array <Proyect> (),
    Users: Array <Usuario>()
} 