import { Response } from './response';
export interface Login extends Response<any>{
   token: string
}