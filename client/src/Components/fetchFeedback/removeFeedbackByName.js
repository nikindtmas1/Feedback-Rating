import * as goshoService from '../services/goshoData';
import * as toshoService from '../services/toshoData';
import * as peshoService from '../services/peshoData';
import * as tomiService from '../services/tomiData';


export function deleteFeedbackByName(id, peopleName, feedback) {
   
   if(peopleName === 'Gosho'){
    return goshoService.deleteGoshoFeedback(id)
    .then(() => feedback.filter((item) => item._id !== id))
   }else if(peopleName === 'Tosho'){
    return toshoService.deleteToshoFeedback(id)
    .then(() => feedback.filter((item) => item._id !== id))
   }else if(peopleName === 'Pesho'){
    return peshoService.deletePeshoFeedback(id)
    .then(() => feedback.filter((item) => item._id !== id))
   }else if(peopleName === 'Tomi'){
    return tomiService.deleteTomiFeedback(id)
    .then(() => feedback.filter((item) => item._id !== id))
   }
}