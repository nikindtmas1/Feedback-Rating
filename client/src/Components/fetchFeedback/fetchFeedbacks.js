import * as service from "../services/data";
import * as goshoService from "../services/goshoData";
import * as toshoService from "../services/toshoData";
import * as peshoService from "../services/peshoData";
import * as tomiService from '../services/tomiData';
import * as therFiveService from '../services/therapiestFiveData';
import * as therSixService from '../services/therSixData';
import * as therSevService from '../services/therSeventhData';
import * as therEightService from '../services/therEightData';
import * as therNineService from '../services/therNineData';

export function fetchByName(name){
  return name === 'One' ? goshoService.getAll()
  : name === 'Two' ? toshoService.getAll()
  : name === 'Three' ? peshoService.getAll()
  : name === 'Four' ? tomiService.getAll()
  : name === 'Five' ? therFiveService.getAll()
  : name === 'Six' ? therSixService.getAll()
  : name === 'Seven' ? therSevService.getAll()
  : name === 'Eight' ? therEightService.getAll()
  : name === 'Nine' ? therNineService.getAll()
  :  service.getAll()
};