import * as goshoService from '../services/goshoData';
import * as toshoService from '../services/toshoData';
import * as peshoService from '../services/peshoData';
import * as tomiService from '../services/tomiData';
import * as therFiveService from '../services/therapiestFiveData';

export function deleteFeedbackByName(id, peopleName, feedback){
   return peopleName === 'Gosho' ?
   goshoService.deleteGoshoFeedback(id).then(() => feedback.filter((item) => item._id !== id))
   : peopleName === 'Tosho' ? toshoService.deleteToshoFeedback(id).then(() => feedback.filter((item) => item._id !== id))
   : peopleName === 'Pesho' ? peshoService.deletePeshoFeedback(id).then(() => feedback.filter((item) => item._id !== id))
   : peopleName === 'Tomi' ? tomiService.deleteTomiFeedback(id).then(() => feedback.filter((item) => item._id !== id))
   : peopleName === 'Svetla' ? therFiveService.deleteTherFeveFeedback(id).then(() => feedback.filter((item) => item._id !== id))
   : null
}