import * as goshoService from '../services/goshoData';
import * as toshoService from '../services/toshoData';
import * as peshoService from '../services/peshoData';
import * as tomiService from '../services/tomiData';
import * as therFiveService from '../services/therapiestFiveData';

export function deleteFeedbackByName(id, therName, feedback){
   return therName === 'Gosho' ?
   goshoService.deleteGoshoFeedback(id).then(() => feedback.filter((item) => item._id !== id))
   : therName === 'Tosho' ? toshoService.deleteToshoFeedback(id).then(() => feedback.filter((item) => item._id !== id))
   : therName === 'Pesho' ? peshoService.deletePeshoFeedback(id).then(() => feedback.filter((item) => item._id !== id))
   : therName === 'Four' ? tomiService.deleteTomiFeedback(id).then(() => feedback.filter((item) => item._id !== id))
   : therName === 'Five' ? therFiveService.deleteTherFeveFeedback(id).then(() => feedback.filter((item) => item._id !== id))
   : null
}