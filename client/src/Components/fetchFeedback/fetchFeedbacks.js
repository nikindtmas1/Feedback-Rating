import * as service from "../services/data";
import * as goshoService from "../services/goshoData";
import * as toshoService from "../services/toshoData";
import * as peshoService from "../services/peshoData";
import * as tomiService from '../services/tomiData';
import * as therFiveService from '../services/therapiestFiveData';

export function fetchByName(name){
  return name === 'Gosho' ? goshoService.getAll()
  : name === 'Tosho' ? toshoService.getAll()
  : name === 'Three' ? peshoService.getAll()
  : name === 'Four' ? tomiService.getAll()
  : name === 'Five' ? therFiveService.getAll()
  :  service.getAll()
}