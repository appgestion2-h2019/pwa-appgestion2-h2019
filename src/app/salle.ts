import { SalleType } from './salle_type';

export class Salle {
  _id: string;
  nom: string;
  langue: string;
  proprietaire: string;
  description: string;
  type: SalleType;
}
