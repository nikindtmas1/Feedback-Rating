import * as goshoService from "../services/goshoData";
import * as toshoService from "../services/toshoData";
import * as peshoService from "../services/peshoData";
import * as tomiService from '../services/tomiData';
import * as therFiveService from '../services/therapiestFiveData';
import * as therSixService from '../services/therSixData';
import * as therSevService from '../services/therSeventhData';
import * as therEightService from '../services/therEightData';

export function addFeedbackByName(data, therName){

  const name = therName;
  return name === 'One' ? 
  goshoService.createGoshoFeedback(data).then(() => goshoService.getAll())
  : name === 'Two' ? toshoService.createToshoFeedback(data).then(() => toshoService.getAll())
  : name === 'Three' ? peshoService.createPeshoFeedback(data).then(() => peshoService.getAll())
  : name === 'Four' ? tomiService.createTomiFeedback(data).then(() => tomiService.getAll())
  : name === 'Five' ? therFiveService.createTherFiveFeedback(data).then(() => therFiveService.getAll())
  : name === 'Six' ? therSixService.createTherSixFeedback(data).then(() => therSixService.getAll())
  : name === 'Seven' ? therSevService.createTherSevFeed(data).then(() => therSevService.getAll())
  : name === 'Eight' ? therEightService.createTherEightFeedback(data).then(() => therEightService.getAll())
  : null
};