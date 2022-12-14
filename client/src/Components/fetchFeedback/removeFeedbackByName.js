
import * as goshoService from '../services/goshoData';
import * as toshoService from '../services/toshoData';
import * as peshoService from '../services/peshoData';



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
   }
}