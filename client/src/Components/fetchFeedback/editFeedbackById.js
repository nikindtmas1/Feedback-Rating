import * as goshoServices from '../services/goshoData';
import * as toshoServices from '../services/toshoData';
import * as peshoServices from '../services/peshoData';
import * as tomiServices from '../services/tomiData';

export function editFeedbackById(id, peopleName, data){
  return peopleName === 'Gosho' ?
  goshoServices.editGoshoFeedback(id, data).then(() => goshoServices.getAll())
  : peopleName === 'Tosho' ? toshoServices.editToshoFeedback(id, data).then(() => toshoServices.getAll())
  : peopleName === 'Pesho' ? peshoServices.editPeshoFeedback(id, data).then(() => peshoServices.getAll())
  : peopleName === 'Tomi' ? tomiServices.editTomiFeedback(id, data).then(() => tomiServices.getAll())
  : null
}