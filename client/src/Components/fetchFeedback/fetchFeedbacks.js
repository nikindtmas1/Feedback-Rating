import * as service from "../services/data";
import * as goshoService from "../services/goshoData";
import * as toshoService from "../services/toshoData";
import * as peshoService from "../services/peshoData";
import * as tomiService from '../services/tomiData';
import * as therFiveService from '../services/therapiestFiveData';
import * as therSixService from '../services/therSixData';
import * as therSevService from '../services/therSeventhData';

export function fetchByName(name){
  return name === 'One' ? goshoService.getAll()
  : name === 'Two' ? toshoService.getAll()
  : name === 'Three' ? peshoService.getAll()
  : name === 'Four' ? tomiService.getAll()
  : name === 'Five' ? therFiveService.getAll()
  : name === 'Six' ? therSixService.getAll()
  : name === 'Seven' ? therSevService.getAll()
  :  service.getAll()
}