import * as goshoServices from '../services/goshoData';
import * as toshoServices from '../services/toshoData';
import * as peshoServices from '../services/peshoData';
import * as tomiServices from '../services/tomiData';
import * as therFiveService from '../services/therapiestFiveData';

export function editFeedbackById(id, therName, data){
  return therName === 'Gosho' ?
  goshoServices.editGoshoFeedback(id, data).then(() => goshoServices.getAll())
  : therName === 'Tosho' ? toshoServices.editToshoFeedback(id, data).then(() => toshoServices.getAll())
  : therName === 'Pesho' ? peshoServices.editPeshoFeedback(id, data).then(() => peshoServices.getAll())
  : therName === 'Four' ? tomiServices.editTomiFeedback(id, data).then(() => tomiServices.getAll())
  : therName === 'Five' ? therFiveService.editTherFiveFeedback(id, data).then(() => therFiveService.getAll())
  : null
}