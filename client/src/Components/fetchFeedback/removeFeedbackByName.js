import * as goshoService from '../services/goshoData';
import * as toshoService from '../services/toshoData';
import * as peshoService from '../services/peshoData';
import * as tomiService from '../services/tomiData';
import * as therFiveService from '../services/therapiestFiveData';
import * as therSixService from '../services/therSixData';

export function deleteFeedbackByName(id, therName, feedback){
   return therName === 'One' ?
   goshoService.deleteGoshoFeedback(id).then(() => feedback.filter((item) => item._id !== id))
   : therName === 'Two' ? toshoService.deleteToshoFeedback(id).then(() => feedback.filter((item) => item._id !== id))
   : therName === 'Three' ? peshoService.deletePeshoFeedback(id).then(() => feedback.filter((item) => item._id !== id))
   : therName === 'Four' ? tomiService.deleteTomiFeedback(id).then(() => feedback.filter((item) => item._id !== id))
   : therName === 'Five' ? therFiveService.deleteTherFeveFeedback(id).then(() => feedback.filter((item) => item._id !== id))
   : therName === 'Six' ? therSixService.deleteTherSixFeedback(id).then(() => feedback.filter((item) => item._id !== id))
   : null
}