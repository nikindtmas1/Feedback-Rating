import * as goshoServices from '../services/goshoData';
import * as toshoServices from '../services/toshoData';
import * as peshoServices from '../services/peshoData';
import * as tomiServices from '../services/tomiData';
import * as therFiveService from '../services/therapiestFiveData';
import * as therSixService from '../services/therSixData';
import * as therSevService from '../services/therSeventhData';
import * as therEightService from '../services/therEightData';

export function editFeedbackById(id, therName, data){
  return therName === 'One' ?
  goshoServices.editGoshoFeedback(id, data).then(() => goshoServices.getAll())
  : therName === 'Two' ? toshoServices.editToshoFeedback(id, data).then(() => toshoServices.getAll())
  : therName === 'Three' ? peshoServices.editPeshoFeedback(id, data).then(() => peshoServices.getAll())
  : therName === 'Four' ? tomiServices.editTomiFeedback(id, data).then(() => tomiServices.getAll())
  : therName === 'Five' ? therFiveService.editTherFiveFeedback(id, data).then(() => therFiveService.getAll())
  : therName === 'Six' ? therSixService.editTherSixFeedback(id, data).then(() => therSixService.getAll())
  : therName === 'Seven' ? therSevService.editTherSevFeed(id, data).then(() => therSevService.getAll())
  : therName === 'Eight' ? therEightService.editTherEightFeedback(id, data).then(() => therEightService.getAll())
  : null
};