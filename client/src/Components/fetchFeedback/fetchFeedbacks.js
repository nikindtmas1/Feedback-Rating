import * as service from "../services/data";
import * as goshoService from "../services/goshoData";
import * as toshoService from "../services/toshoData";
import * as peshoService from "../services/peshoData";
import * as tomiService from '../services/tomiData';

export function fetchByName(name){
  return name === 'Gosho' ? goshoService.getAll()
  : name === 'Tosho' ? toshoService.getAll()
  : name === 'Pesho' ? peshoService.getAll()
  : name === 'Tomi' ? tomiService.getAll()
  :  service.getAll()
}