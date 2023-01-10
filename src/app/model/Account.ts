import {BillStatus} from "./BillStatus";
import {Roles} from "./Roles";

export class Account {
  id!: number

  username!:string;
  email!:string;
  password!:string;
  phoneNumber! :string;
  name!:string;

  birthday!:Date;

  date!:Date;

  gender!:string;
  img!:string;
  status!:number;

  roles!: Roles;
}
